import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from '../utils/axios'
import Searchbar from "../Components/templates/Searchbar";
import Dropdown from "../Components/templates/Dropdown";
import VerticalCards from "../Components/templates/VerticalCards";

function Tv() {
  const navigate = useNavigate()
  const [category, setCategory] = useState("popular")
  const [tvShows, setTvShows] = useState([])

  const getTv = useCallback(async () => {
    try {
      const { data } = await axios.get(`/tv/${category}`)
      setTvShows(data.results)
    } catch (err) {
      console.log(err)
    }
  }, [category])

  useEffect(() => {
    getTv()
  }, [getTv])

  return (
    <div className="w-full h-full overflow-auto text-white">
      <div className="w-full flex flex-wrap items-center gap-3 justify-between px-4 md:px-10 pt-5 pb-3">
        <div className="flex items-center gap-3">
          <i onClick={() => navigate(-1)} className="ri-arrow-left-line text-2xl text-red-400 cursor-pointer"></i>
          <h1 className="text-2xl text-zinc-400 font-semibold">TV Shows</h1>
        </div>
        <Searchbar />
        <Dropdown
          title="Category"
          options={[
            { label: "Popular", value: "popular" },
            { label: "Top Rated", value: "top_rated" },
            { label: "On The Air", value: "on_the_air" },
            { label: "Airing Today", value: "airing_today" },
          ]}
          onChange={(val) => setCategory(val)}
        />
      </div>
      <VerticalCards data={tvShows} />
    </div>
  );
}

export default Tv;
