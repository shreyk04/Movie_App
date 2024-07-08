import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { Link, NavLink } from "react-router-dom";
import fetchMovies from "../../Apis/movie";
import "./home.css";
import MovieList from "../MovieList/MovieList";
import fetchMoviesById from "../../Apis/movieDetailById";
import Popup from "../../Components/Popup";

function Home({ moviesData }) {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div className="homepage">
      {/* {showPopup && <Popup setShow={setShowPopup}/>} */}
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={2}
        infiniteLoop={true}
        showStatus={false}
      >
        {moviesData &&
          moviesData.length > 0 &&
          moviesData.map((item) => (
            <NavLink
              key={item.id}
              to={`/movie/${item.id}`}
              style={{ textDecoration: "none" }}
              className="movie-carousel"
            >
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    item && item.backdrop_path
                  }`}
                  alt=""
                />
              </div>
              <div className="posterImage_overlay">
                <div className="posterImage_title">{item.original_title}</div>
                <div className="posterImage_runtime">
                  <span>
                    <p>{item.release_date}</p>
                  </span>
                  <span className="posterImage_rating">
                    <p>{item ? item.vote_average : ""}</p>
                    <i className="fa-solid fa-star"></i>
                  </span>
                </div>

                <div className="posterImage_desc">
                  {item ? item.overview : ""}
                </div>
              </div>
              {/* <img src={item.poster_path} alt="img not found" /> */}
            </NavLink>
          ))}
      </Carousel>

      <MovieList />
    </div>
  );
}

export default Home;
