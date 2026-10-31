import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from '../utils/axios'
import Searchbar from "../Components/templates/Searchbar";
import VerticalCards from "../Components/templates/VerticalCards";

function People() {
  const navigate = useNavigate()
  const [people, setPeople] = useState([])

  const getPeople = async () => {
    try {
      const { data } = await axios.get(`/person/popular`)
      setPeople(data.results)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getPeople()
  }, [])

  return (
    <div className="w-full h-full overflow-auto text-white">
      <div className="w-full flex flex-wrap items-center gap-3 justify-between px-4 md:px-10 pt-5 pb-3">
        <div className="flex items-center gap-3">
          <i onClick={() => navigate(-1)} className="ri-arrow-left-line text-2xl text-red-400 cursor-pointer"></i>
          <h1 className="text-2xl text-zinc-400 font-semibold">People</h1>
        </div>
        <Searchbar />
      </div>
      <VerticalCards data={people} isPeople={true} />
    </div>
  );
}

export default People;
