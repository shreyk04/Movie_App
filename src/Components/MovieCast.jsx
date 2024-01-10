import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import fetchMovieCredits from "../Apis/movieCredits";
import ProfileTile from "./ProfileTile";
import MovieCastDetail from "./MovieCastDetail";
import { Link, NavLink } from "react-router-dom";

export default function MovieCast({ id }) {
  const [movieCharacters, setMovieCharacters] = useState([]);
  const [offset, setOffset] = useState(5);
  const [loading, setLoading] = useState(false);

  const fetchCharacters = async () => {
    setLoading(true);
    const castData = await fetchMovieCredits(id);
    setMovieCharacters(castData);
    setLoading(false);
    console.log(`castData is ${castData}`);
  };

  useEffect(() => {
    if (id) fetchCharacters();
  }, [id]);

  return (
    <Style>
      <div className="cast-wrapper">
        <div className="header">Cast</div>
        <div className="cast">
          {loading && <h3>loading...</h3>}
          {movieCharacters.slice(0, offset).map((profile) => (
            <NavLink to={`/movie/${profile.id}/castDetail`} style={{textDecoration:"none"}}>
              <ProfileTile {...profile} />
            </NavLink>
          ))}
          {!(offset >= movieCharacters.length) && (
            <button onClick={() => setOffset((prev) => prev + 5)}>
              Show more
            </button>
          )}
        </div>
      </div>
    </Style>
  );
}

const Style = styled.div`
  .cast {
    overflow-x: auto;
    gap: 1rem;
    display: flex;
    align-items: center;
    padding-bottom: 2rem;

    button {
      background-color: transparent;
      border: none;
      color: white;
      cursor: pointer;
    }
  }
  .cast::-webkit-scrollbar {
    height: 5px;
  }

  /* Track */
  .cast::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  .cast::-webkit-scrollbar-thumb {
    background: #d41c1c;
  }

  /* Handle on hover */
  .cast::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
