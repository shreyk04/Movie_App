import React, { useEffect, useState } from "react";

import "./card.css";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { useRef } from "react";
function Card({ movie }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showFullDesc, setShowFullDesc] = useState(false);

  const [descriptionHeight, setDescriptionHeight] = useState(0);
  const descriptionRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const toggleDesc = (e) => {
    e.preventDefault();
    setShowFullDesc(!showFullDesc);
  };

  useEffect(() => {
    if (descriptionRef.current) {
      setDescriptionHeight(descriptionRef.current.scrollHeight);
    }
  }, [showFullDesc]);
  return (
    <Link
      to={`/movie/${movie.id}`}
      style={{ textDecoration: "none", color: "white" }}
    >
      <div className="cards">
        <div className="card-image">
          <img
            src={`https://image.tmdb.org/t/p/original${
              movie && movie.poster_path
            }`}
            alt=""
          />
        </div>
        <div className={`cards_overlay  ${showFullDesc && "show-scrollbar"}`}>
          <div className="cards_title">{movie.original_title}</div>
          <div className="cards_runtime">
            <span>
              <p>{movie.release_date}</p>
            </span>
            <span className="cards_rating">
              <p>
                {movie ? movie.vote_average : ""} <AiFillStar />
              </p>
            </span>
          </div>

          <div
            className={`cards_desc ${showFullDesc ? "expanded" : ""}`}
            ref={descriptionRef}
            style={{ maxHeight: showFullDesc ? descriptionHeight : 65 }}
          >
            {movie ? movie.overview : ""}
          </div>
          {movie.overview.length > 150 && (
            <button onClick={(e) => toggleDesc(e)} className="see-more">
              {showFullDesc ? "see less" : "see more"}
            </button>
          )}
        </div>
      </div>
    </Link>
  );
}

export default Card;
