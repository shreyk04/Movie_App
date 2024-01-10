import axios from 'axios';
import { useParams } from 'react-router-dom';

import { TMDB_API_KEY } from "../Utility/constants";

const apiKey = TMDB_API_KEY; // Replace with your actual TMDb API key



const fetchMoviesById=async(id) =>{
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
    const movies = response.data;
    // console.log(movies);
    return movies;
    // Use the movies data in your application
  } catch (error) {
    console.error(error);
  }
}

export default fetchMoviesById;
