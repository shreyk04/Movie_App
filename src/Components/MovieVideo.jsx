import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import fetchMovieVideos from "../Apis/movieVideos";
import fetchMoviesById from "../Apis/movieDetailById";
import axios from "axios";
import Popup from "./Popup";

const apiKey = "e9e5ce890d9c07ec4c63fc99f33c89d2"; // Replace with your actual TMDb API key

function MovieVideo({ movieId }) {
  const playerRef = useRef(null);
  const [videoKey, setVideoKey] = useState(null);

  const [backdropUrl, setBackdropUrl] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  // const videoUrl = `https://www.youtube.com/watch?v=uOh7x6WsNAw`;

  // https://www.youtube.com/watch?v=wMVwoqp_fwM

  useEffect(() => {
    async function fetchVideoKey() {
      try {
        const key = await fetchMovieVideos(movieId);
        setVideoKey(key);
      } catch (error) {
        console.error("Error fetching video key:", error);
      }
    }

    fetchVideoKey();
  }, []);
  const videoUrl = `https://www.youtube.com/embed/${videoKey}`;

  const fetchVideosAndImages = async () => {
    try {
      //   const videosResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=YOUR_TMDB_API_KEY`);
      //   const videosData = videosResponse.data.results;
      //   setVideos(videosData);

      const imagesResponse = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
      );
      const imagesData = imagesResponse.data.backdrop_path;
      setBackdropUrl(imagesData);
      //   setBackgroundImages(imagesData);
      console.log(imagesData);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchVideoBackdrop = async () => {
    const data = await fetchMoviesById(movieId);
    console.log(data);
    const backdropPath = data.backdrop_path;
    if (backdropPath) {
      const backdropUrl = `https://www.themoviedb.org/t/p/original${backdropPath}`;
      setBackdropUrl(backdropUrl);
    }
  };
  useEffect(() => {
    fetchVideoBackdrop();
    // fetchVideosAndImages();
  }, [movieId]);

  return (
    <Style>
      <h4>See Videos</h4>
      <div className="video-poster">
        {/* <ReactPlayer  ref={playerRef} url={videoUrl} controls={true}/> */}

        {/* <button onClick={fetchVideosAndImages}>click for videos</button> */}
        <img src={backdropUrl} alt="Backdrop" />

        <div className="play-icon" onClick={() => setShowPopup(true)}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/148/148744.png"
            alt="Icon not found"
          />
        </div>
      </div>
      {showPopup && <Popup setShowPopup={setShowPopup} videoUrl={videoUrl} />}
    </Style>
  );
}

export default MovieVideo;

const Style = styled.div`
  width: 100%;
  h4 {
    text-shadow: 0 0 3px #ff0000;
  }
  .video-poster {
    background-color: aliceblue;
    width: 100%;
    position: relative;
    img {
      width: 100%;
    }

    .play-icon {
      width: 50px;
      height: 50px;
      position: absolute;
      top: 50%;
      left: 50%;
      /* background-color: white; */
      border-radius: 50%;
      display: grid;
      place-content: center;
      cursor: pointer;
    }
  }
`;
