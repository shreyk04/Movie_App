import axios from 'axios';
import { TMDB_API_KEY } from "../Utility/constants";


const apiKey = TMDB_API_KEY; // Replace with your actual TMDb API key

const fetchMovies=async() =>{
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
    const movies = response.data.results;
    console.log(movies);
    return movies;
    // Use the movies data in your application
  } catch (error) {
    console.error(error);
  }
}

export default fetchMovies;
