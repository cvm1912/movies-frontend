import React, { useState, useEffect, useCallback } from 'react'
import Nav from '../../Components/templates/Nav'
import axios from '../../utils/axios'
import Headers from '../../Components/templates/Headers'
import Cards from '../../Components/templates/Cards'
import Loading from '../../Components/Loading'

function Home(){
  document.title = "MBS | Homepage "
  const[wallpaper, setWallpaper]= useState(null);
  const [trending,setTrending] = useState(null);
  const [category,setCategory] =useState("all")
  const getHeaderWallpaper = async ()=>{
    try{
      const {data} = await axios.get(`/trending/all/day`);
      let randomdata= data.results[Math.floor(Math.random()*data.results.length)]
      setWallpaper(randomdata);
    }catch(err){
      console.log(err)
    }
  }

  const getTrending = useCallback(async ()=>{
    try{
      const {data} = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
    }catch(err){
      console.log(err)
    }
  },[category])
  
  useEffect(()=>{
    getHeaderWallpaper();
    getTrending();
  },[getTrending])

  console.log(wallpaper);
  return (
   <>
    <div className='w-full h-full overflow-auto overflow-x-hidden'>
      <Nav/>
      <Headers data={wallpaper}/>
      {!trending ? <Loading /> : <Cards data={trending} func={setCategory} />}
    </div>
   </>
  )
}

export default Home
