import React, { useEffect, useState } from "react";
import fetchMovies from "../../Apis/movie";
import Home from "../Home/Home";

function Body() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await fetchMovies();
      setMovies(result);
    } catch (e) {
      console.log(e);
    }
  };

  const handleClick = () => {
    console.log(movies);
  };

  return (
    <>
      {movies && movies.length > 0 ? (
        <Home moviesData={movies} />
      ) : (
        <p>Loading...</p>
      )}

      {/* <button onClick={handleClick}>click me</button> */}
    </>
  );
}

export default Body;
