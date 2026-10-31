import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Searchbar from "../../Components/templates/Searchbar";
import Dropdown from "../../Components/templates/Dropdown";
import VerticalCards from "../../Components/templates/VerticalCards";
import Loading from "../../Components/Loading";
import Headers from "../../Components/templates/Headers";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from '../../utils/axios'

function Trending() {
  const navigate = useNavigate()
  const [category, setCategory] = useState("all")
  const [duration, setDuration] = useState("day")
  const [trending, setTrending] = useState([])
  const [wallpaper, setWallpaper] = useState(null)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  const getTrending = useCallback(async (reset = false) => {
    try {
      const currentPage = reset ? 1 : page
      const { data } = await axios.get(`/trending/${category}/${duration}?page=${currentPage}`)
      if (reset) {
        setTrending(data.results)
        setWallpaper(data.results[Math.floor(Math.random() * data.results.length)])
        setPage(2)
      } else {
        setTrending((prev) => [...prev, ...data.results])
        setPage((prev) => prev + 1)
      }
      if (currentPage >= data.total_pages) setHasMore(false)
    } catch (err) {
      console.log(err)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, duration])

  // eslint-disable-next-line
  useEffect(() => {
    setHasMore(true)
    getTrending(true)
  }, [getTrending])

  return (
    <div id="scrollDiv" className="w-full h-full overflow-auto text-white">
      <div className="w-full h-[10vh] flex items-center gap-3 justify-between px-10 pt-5">
        <div className="flex items-center gap-3">
          <i onClick={() => navigate(-1)} className="ri-arrow-left-line text-2xl text-red-400 cursor-pointer"></i>
          <h1 className="text-2xl text-zinc-400 font-semibold">Trending</h1>
        </div>

        <Searchbar />
        <Dropdown
          title="category"
          options={[
            { label: "All", value: "all" },
            { label: "Movie", value: "movie" },
            { label: "TV", value: "tv" },
          ]}
          onChange={(val) => setCategory(val)}
        />
        <Dropdown
          title="Duration"
          options={[
            { label: "Day", value: "day" },
            { label: "Week", value: "week" },
          ]}
          onChange={(val) => setDuration(val)}
        />
      </div>

      <Headers data={wallpaper} />

      <InfiniteScroll
        dataLength={trending.length}
        next={getTrending}
        hasMore={hasMore}
        loader={<Loading />}
        scrollableTarget="scrollDiv"
      >
        <VerticalCards data={trending} />
      </InfiniteScroll>
    </div>
  );
}

export default Trending;
