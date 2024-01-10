import axios from "axios";

import { TMDB_API_KEY } from "../Utility/constants";

const apiKey = TMDB_API_KEY; 

const fetchMovieReviews=async(movieId)=> {
   // Replace with your actual TMDb API key
    const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`;
  
    try {
      const response = await axios.get(url);
      const reviews = response.data.results;
      // Do something with the reviews data
     return reviews
    } catch (error) {
      // Handle error
      console.error(error);
    }
  }
  export default fetchMovieReviews;
