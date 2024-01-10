import axios from "axios";

import { TMDB_API_KEY } from "../Utility/constants";

const fetchMovieVideos=async(movieId)=>{

    const apiKey = TMDB_API_KEY; // Replace with your actual TMDb API key

    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`;

    try{
        const response=await axios.get(url);
        const result=response.data.results;
        const trailer=result.filter((video)=>(video.type === "Trailer"
        ))
        console.log(trailer[0].key);
        return trailer[0].key;

        
    }catch(error){                                                                                                  
        console.log(error);
    }
}

export default fetchMovieVideos;