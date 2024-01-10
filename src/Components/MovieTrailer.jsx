import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { TMDB_API_KEY } from "../Utility/constants";


const MovieTrailer = ({ movieId }) => {
    const apiKey = TMDB_API_KEY; // Replace with your actual TMDb API key

  const [videoKey, setVideoKey] = useState(null);
  const [backdropUrl, setBackdropUrl] = useState(null);



  const fetchVideoKeyAndBackdrop = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`);
      const videos = response.data.results;
      console.log(videos);
      if (videos.length > 0) {
        const { key } = videos[0]; // Assuming you want to retrieve the first video
        setVideoKey(key);
      }
    } catch (error) {
      console.error(error);
    }

    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`);
      const backdropPath = response.data.backdrop_path;
      if (backdropPath) {
        const backdropUrl = `https://www.themoviedb.org/t/p/original${backdropPath}`;
        setBackdropUrl(backdropUrl);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
   

    fetchVideoKeyAndBackdrop();
  }, [movieId]);

  if (!videoKey || !backdropUrl) {
    return <div>Loading video...</div>;
  }

  const videoUrl = `https://www.youtube.com/watch?v=${videoKey}`;

  return (
    <Style>
      <img  src={backdropUrl} alt="Backdrop" />
      <iframe width="560" height="315" src={videoUrl} title="Movie Trailer" frameBorder="0" allowFullScreen></iframe>
      <button onClick={fetchVideoKeyAndBackdrop}>click for videos</button>
    </Style>
  );
};

export default MovieTrailer;
const Style=styled.div`
     img{
        width: 100px;
        height: 100px;
     }
`