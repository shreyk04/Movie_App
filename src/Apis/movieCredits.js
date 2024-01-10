import axios from 'axios';
import { TMDB_API_KEY } from '../Utility/constants';

const apiKey = TMDB_API_KEY // Replace with your actual TMDb API key



const fetchMovieCredits = async (movieId) => {



  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`);
    const credits = response.data.cast;
    console.log(credits);
    return credits;
    // Use the credits data in your application to get information about the cast and crew
  } catch (error) {
    console.error(error);
  }
};

export default fetchMovieCredits;
