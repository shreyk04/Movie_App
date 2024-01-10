import React, { useEffect, useState } from 'react'
import fetchMovies from '../../Apis/movie';
import Home from '../Home/Home';

function Body() {


  const [movies, setMovies] = useState([]);

  
  useEffect(()=>{
    fetchData();
   },[])
   const fetchData=async()=>{
    try{
        const result=await fetchMovies();
        setMovies(result);
    }catch(e){
        console.log(e);
    }
   };

   

   const handleClick=()=>{
       console.log(movies);
   }
 
  return (
    <>
    <Home moviesData={movies}/>

    {/* <button onClick={handleClick}>click me</button> */}

    
    </>
  )
}

export default Body