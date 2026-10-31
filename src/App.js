import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Trending from "./pages/Home/Trending";
import Popular from "./pages/Popular";
import Movie from "./pages/Movie";
import Tv from "./pages/Tv";
import People from "./pages/People";
import Sidenav from "./Components/templates/Sidenav";

function App() {
  const [sidenavOpen, setSidenavOpen] = useState(false);
  return (  
    <div className="w-screen h-screen bg-black flex relative">
      {/* Hamburger */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 text-white text-2xl bg-zinc-800 p-2 rounded-lg"
        onClick={() => setSidenavOpen(!sidenavOpen)}
      >
        <i className={sidenavOpen ? "ri-close-line" : "ri-menu-line"}></i>
      </button>

      {/* Overlay */}
      {sidenavOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/60 z-30"
          onClick={() => setSidenavOpen(false)}
        />
      )}

      <div className={`fixed md:static z-40 h-full transition-transform duration-300 ${
        sidenavOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}>
        <Sidenav onClose={() => setSidenavOpen(false)} />
      </div>

      <div className="w-full md:w-[80%] md:ml-auto h-full overflow-auto overflow-x-hidden">
        <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="/trending" element={<Trending/>}/>
          <Route path="/popular" element={<Popular/>}/>
          <Route path="/movies" element={<Movie/>}/>
          <Route path="/tv-shows" element={<Tv/>}/>
          <Route path="/people" element={<People/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;