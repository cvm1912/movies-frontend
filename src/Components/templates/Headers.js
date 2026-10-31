import React from "react";
import { Link } from "react-router-dom";

function Headers({ data }) {
  if (!data) return null;
  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${data?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-[40vh] md:h-[50vh] flex flex-col justify-end p-[5%]"
    >
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-white">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>

      <p className="text-white w-full md:w-[70%] mt-2 text-sm md:text-base">
        {data.overview.slice(0, 200)}...{" "}
        <Link to="#" className="text-red-400">more</Link>
      </p>

      <p className="text-white mt-3 gap-2 flex">
        <i className="text-red-500 ri-megaphone-fill"></i> {data.release_date}
        <i className="text-red-500 ri-album-fill"></i>{" "}
        {data.media_type?.toUpperCase()}
      </p>

      <Link to="#" className="mt-4 px-5 py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 duration-300 w-fit">
        Watch Trailer
      </Link>
    </div>
  );
}

export default Headers;
