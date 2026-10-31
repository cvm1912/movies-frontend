import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from '../utils/axios'
import Searchbar from "../Components/templates/Searchbar";
import Dropdown from "../Components/templates/Dropdown";
import VerticalCards from "../Components/templates/VerticalCards";

function Movie() {
  const navigate = useNavigate()
  const [category, setCategory] = useState("popular")
  const [movies, setMovies] = useState([])

  const getMovies = useCallback(async () => {
    try {
      const { data } = await axios.get(`/movie/${category}`)
      setMovies(data.results)
    } catch (err) {
      console.log(err)
    }
  }, [category])

  // eslint-disable-next-line
  useEffect(() => {
    getMovies()
  }, [getMovies])

  return (
    <div className="w-full h-full overflow-auto text-white">
      <div className="w-full h-[10vh] flex items-center gap-3 justify-between px-10 pt-5">
        <div className="flex items-center gap-3">
          <i onClick={() => navigate(-1)} className="ri-arrow-left-line text-2xl text-red-400 cursor-pointer"></i>
          <h1 className="text-2xl text-zinc-400 font-semibold">Movies</h1>
        </div>
        <Searchbar />
        <Dropdown
          title="Category"
          options={[
            { label: "Popular", value: "popular" },
            { label: "Top Rated", value: "top_rated" },
            { label: "Upcoming", value: "upcoming" },
            { label: "Now Playing", value: "now_playing" },
          ]}
          onChange={(val) => setCategory(val)}
        />
      </div>
      <VerticalCards data={movies} />
    </div>
  );
}

export default Movie;
