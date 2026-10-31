import React from "react";
import { Link } from "react-router-dom";

function VerticalCards({ data, isPeople = false }) {
  if (!data) return null;
  return (
    <div className="flex flex-wrap gap-y-6 gap-x-4 md:gap-x-14 p-4 md:p-5 justify-center">
      {data.map((item, i) => (
        <Link
          key={i}
          to={`/${isPeople ? "person" : item.media_type}/${item.id}`}
          className="w-[140px] md:w-[180px] hover:scale-105 duration-300"
        >
          <div className="relative">
            <img
              className={`w-[140px] md:w-[180px] object-cover ${ isPeople ? "h-[140px] md:h-[180px] rounded-full" : "h-[210px] md:h-[260px] rounded-xl"}`}
              src={
                isPeople
                  ? item.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
                    : "/no-image.png"
                  : item.poster_path || item.backdrop_path
                  ? `https://image.tmdb.org/t/p/w500/${item.poster_path || item.backdrop_path}`
                  : "/no-image.png"
              }
              alt={item.name}
            />
            {!isPeople && (
              <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-black/60 px-2 py-1 rounded-lg">
                <i className="ri-star-fill text-yellow-400 text-xs"></i>
                <span className="text-white text-xs font-semibold">{item.vote_average?.toFixed(1)}</span>
              </div>
            )}
          </div>
          <h2 className="text-white mt-2 text-sm font-semibold truncate text-center">
            {item.title || item.name || item.original_title || item.original_name}
          </h2>
          {isPeople && (
            <p className="text-zinc-400 text-xs text-center mt-1">{item.known_for_department}</p>
          )}
        </Link>
      ))}
    </div>
  );
}

export default VerticalCards;
