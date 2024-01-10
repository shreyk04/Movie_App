import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from '../Card/Card';
import "./movieList.css"
import  {TMDB_API_KEY} from '../../Utility/constants';


function MovieList() {

    const[movieList,setMovieList]=useState([])
    const {type}=useParams()
    const apiKey = TMDB_API_KEY; // Replace with your actual TMDb API key

    const getData=()=>{
        fetch(`https://api.themoviedb.org/3/movie/${type?type:"popular"}?api_key=${apiKey}`)
        .then(res=>res.json())
        .then(data=>setMovieList(data.results))
    }   

    useEffect(()=>{
         getData()
    },[type])
  return (
   <div className="movie-list">
      <h2 className='list-title'>Popular Movies</h2>
      <div className="list-cards">
        {
           movieList.map((movie)=>(
            <Card movie={movie}/>
           ))
        }
      </div>
   </div>
  )
}

export default MovieList