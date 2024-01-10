import axios from 'axios';

import { TMDB_API_KEY } from "../Utility/constants";
const apiKey = TMDB_API_KEY; // Replace with your actual TMDb API key

const fetchPopularMovies = async (personId) => {
  try {
    const response= await axios.get(`https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${apiKey}`)
    const combinedCredits = response.data.cast;
    const popularMovies = combinedCredits.filter((credit) => credit.popularity > 50);
    console.log(popularMovies);
    return popularMovies;
  } catch (error) {
    console.log(error);
  }
};

export default fetchPopularMovies;