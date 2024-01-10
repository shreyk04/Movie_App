import axios from "axios";
import { TMDB_API_KEY } from "../Utility/constants";

const apiKey = TMDB_API_KEY; // Replace with your actual TMDb API key


const fetchCastMovies=async(person_id)=>{

    try{

        const response= await axios.get(`https://api.themoviedb.org/3/person/${person_id}/movie_credits?api_key=${apiKey}`)
        const result=response.data.cast;
        const pMovies=result.filter((credit)=>credit.popularity>50)
        console.log(result);
        console.log(pMovies);
        return result
    }
    catch(error){
        console.log(error);
    }

}

export default fetchCastMovies;