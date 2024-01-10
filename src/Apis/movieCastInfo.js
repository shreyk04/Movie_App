import axios from "axios";

import { TMDB_API_KEY } from "../Utility/constants";

const apiKey = TMDB_API_KEY; // Replace with your actual TMDb API key


const fetchCastInfo=async(person_id)=>{

    try{
        const response= await axios.get(`https://api.themoviedb.org/3/person/${person_id}?api_key=${apiKey}`)
        const result=response.data;
        // console.log(result);
        return result
    }
    catch(error){
        console.log(error);
    }

}

export default fetchCastInfo;