import React from 'react'
import { Link } from 'react-router-dom'

function Sidenav({ onClose }) {
  return (
    <div className='w-[70vw] sm:w-[250px] md:w-[20vw] h-full border-r-2 border-zinc-700 p-6 md:p-8 text-white bg-black'>

      <h1 className='font-bold text-2xl md:text-3xl mb-2 flex items-center gap-2'>
        <i className="text-[#EF2121] text-4xl md:text-5xl ri-netflix-fill"></i>
        <span className='text-[#EF2121] tracking-tighter'>Netflix</span>
      </h1>

      <nav className='flex flex-col text-lg md:text-xl py-8 gap-1 border-b border-zinc-700'>
        <h1 className='text-zinc-400 text-sm font-semibold uppercase tracking-widest mb-2'>New Feeds</h1>
        <Link onClick={onClose} to="/trending" className='hover:bg-red-600 p-3 duration-300 rounded-xl'><span className='mr-3'><i className="ri-fire-line"></i></span>Trending</Link>
        <Link onClick={onClose} to="/popular" className='hover:bg-red-600 p-3 rounded-xl duration-300'><span className='mr-3'><i className="ri-sparkling-line"></i></span>Popular</Link>
        <Link onClick={onClose} to="/movies" className='hover:bg-red-600 p-3 rounded-xl duration-300'><span className='mr-3'><i className="ri-movie-2-line"></i></span>Movies</Link>
        <Link onClick={onClose} to="/tv-shows" className='hover:bg-red-600 p-3 rounded-xl duration-300'><span className='mr-3'><i className="ri-tv-2-line"></i></span>TV Shows</Link>
        <Link onClick={onClose} to="/people" className='hover:bg-red-600 p-3 rounded-xl duration-300'><span className='mr-3'><i className="ri-team-line"></i></span>People</Link>
      </nav>

      <nav className='flex flex-col text-lg md:text-xl py-8 gap-1'>
        <h1 className='text-zinc-400 text-sm font-semibold uppercase tracking-widest mb-2'>Web Information</h1>
        <Link onClick={onClose} to="/about" className='hover:bg-red-600 p-3 duration-300 rounded-xl'><span className='mr-3'><i className="ri-information-line"></i></span>About</Link>
        <Link onClick={onClose} to="/contact" className='hover:bg-red-600 p-3 rounded-xl duration-300'><span className='mr-3'><i className="ri-phone-line"></i></span>Contact</Link>
      </nav>

    </div>
  )
}

export default Sidenav