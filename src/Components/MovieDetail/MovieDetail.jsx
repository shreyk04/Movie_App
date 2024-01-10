import React, { useEffect, useState } from "react";
import { generatePath, useParams } from "react-router-dom";
import fetchMoviesById from "../../Apis/movieDetailById";
import {
  FaFacebook,
  FaHeart,
  FaInstagram,
  FaStar,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { RiBookmarkLine, RiSaveFill } from "react-icons/ri";
import {
  AiFillStar,
  AiOutlineHeart,
  AiOutlineStar,
  AiOutlineUnorderedList,
} from "react-icons/ai";

import "./movieDetail.css";
import { styled } from "styled-components";
import ProfileTile from "../ProfileTile";
import fetchMovieCredits from "../../Apis/movieCredits";
import Slider from "react-slick";
import MovieReviews from "../MovieReviews";
import MovieCast from "../MovieCast";
import Popup from "../Popup";
import fetchMovieVideos from "../../Apis/movieVideos";
import MovieVideo from "../MovieVideo";
import MovieTrailer from "../MovieTrailer";
function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const movieData = await fetchMoviesById(id);
      setMovie(movieData);
      // console.log(movie);
    };
    fetchMovie();
  }, [id]);

  

  const getVideos=async()=>{
      const data=await fetchMovieVideos(id);
      console.log(data);
  }

 

  return (
    <>
    <Style>
      <div className="movie-detail-page">
        <div className="movie-background">
          <img
            src={`https://image.tmdb.org/t/p/original${
              movie ? movie.backdrop_path : ""
            }`}
            alt=""
            className="movie-backdrop-image"
          />
        </div>
        <div className="movie-info">
          <div className="left-info">
            <img
              src={`https://image.tmdb.org/t/p/original${
                movie && movie.poster_path
              }`}
              alt=""
              className="movie-poster"
            />
          </div>

          <div className="right-info">
            <h1 className="movie-title">
              {movie && movie.original_title}{" "}
              {movie && `( ${movie.release_date.slice(0, 4)})`}
            </h1>
            <p className="movie-tagline">{movie && movie.tagline}</p>

            <div className="movie-type">
              <p className="movie-release-date">
                {movie && movie.release_date}
              </p>
              <div className="movie-genres">
                {movie &&
                  movie.genres.map((genre) => (
                    <p className="movie-genre-name">{genre.name}</p>
                  ))}
              </div>
              <p className="movie-runtime">{movie && movie.runtime} mins</p>
            </div>

            <div className="movie-rating">
              <div className="rating">
                {movie && movie.vote_average}
                <AiFillStar />{" "}
              </div>
              <p>{movie && movie.vote_count} votes</p>
            </div>
            <div className="icons">
              <div className="icon">
                <AiOutlineUnorderedList />
              </div>
              <div className="icon">
                <AiOutlineHeart />
              </div>
              <div className="icon">
                <RiBookmarkLine />
              </div>
              <div className="icon">
                <AiOutlineStar />
              </div>
            </div>
            <h3>Overview</h3>
            <div className="overview">
              <p className="movie-overview">{movie && movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="movie-content">
        {/* <div className="cast-wrapper"> */}
        <div className="left-content">
         
          <MovieCast id={id}/>
          <MovieReviews movieId={id} />
          {/* <button onClick={getVideos}>click for videos</button> */}
          <MovieVideo movieId={id}/>
          {/* <MovieTrailer movieId={id}/> */}
        </div>

        <div className="right-content">
          <div className="icons">
            <div className="icon">
              <FaInstagram />
            </div>
            <div className="icon">
              <FaFacebook />
            </div>
            <div className="icon">
              <FaYoutube />
            </div>
            <div className="icon">
              <FaTwitter />
            </div>
          </div>
          <div className="status">
            <h5>Status</h5>
            <p>{movie && movie.status}</p>
          </div>
          <div className="status">
            <h5>Original Language</h5>
            <p>{movie && movie.original_language}</p>
          </div>
          <div className="status">
            <h5>Budget</h5>
            <p>${movie && movie.budget}</p>
          </div>
          <div className="status">
            <h5>Revenue</h5>
            <p>${movie && movie.revenue}</p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </Style>
    </>
  );
}

export default MovieDetail;

const Style = styled.main`

  padding-bottom: 2rem;

  .cast-wrapper {
    /* width: 70%; */
    /* padding: 0 1rem; */

    .header {
      font-size: 1.2rem;
    }
  }

  

  .movie-content {
    display: flex;
    width: 100%;
    /* margin-left:1rem; */
    padding: 0 1.3rem;

    .left-content {
      display: flex;
      flex-direction: column;
      width: 70%;
      /* background-color: #d41c1c; */
    }

    .right-content {
      width: 30%;
      /* background-color: #c4b4b4; */
      padding: 0 2rem;
      .icons {
        display: flex;
        margin-bottom:1rem;
       
        .icon {
          
          /* text-align: center; */
          padding: 0.5rem;
          margin-right: 0.7rem;
          border-radius: 50%;
          cursor: pointer;
          background-color: rgb(30, 26, 26);
          color: white;
        }
      }

      .status {
        margin-bottom: 1rem;
      }
    }
  }
`;
