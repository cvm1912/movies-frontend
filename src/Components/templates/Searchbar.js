import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import axios from '../../utils/axios'



function Searchbar() {
    const [query, setQuery] = useState("");
    const[search,setSearches]=useState();
    
  const getSearches = useCallback(async ()=>{
    try{
      const {data} = await axios.get(`/search/multi?query=${query}`);
      console.log(data.results)
      setSearches(data.results);
      
      console.log(data.request);
    }catch(err){
      console.log(err)
    }
  },[query])

  useEffect(()=>{
     getSearches();
  },[getSearches])

    return (
        <div className="w-full h-[10vh] flex items-center justify-center px-4 md:px-6 relative">
            <i className="text-2xl md:text-3xl text-zinc-400 ri-search-2-line"></i>
            <input
                className="w-[60%] md:w-[50%] mx-3 md:mx-5 p-2 md:p-3 bg-transparent text-base md:text-xl outline-none border-none text-white placeholder-zinc-500"
                type="text"
                placeholder="search anything"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            {query.length > 0 && (
                <i onClick={() => setQuery("")} className="text-zinc-400 text-3xl ri-close-line cursor-pointer hover:text-white"></i>
            )}

            {query.length > 0 && (
                <div className="w-[80%] md:w-[50%] max-h-[50vh] bg-zinc-800 absolute top-[100%] rounded-xl overflow-auto shadow-lg z-10">
                {search.map((s,i)=>(
                    <Link key = {i}
                        className="flex items-center gap-3 p-3 hover:bg-zinc-700 rounded-xl duration-300 cursor-pointer group">
                        <img className="w-12 h-12 rounded-lg object-cover group-hover:scale-105 duration-300" src={s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}` : '/no-image.png'} alt="" />
                        <span className="text-white text-lg group-hover:text-red-400 duration-300">{s.name || s.title || s.original_name || s.original_title}</span>
                    </Link>
                    )
                )}
                  
                </div>
            )}
        </div>
    );
}

export default Searchbar;
