import React, { useEffect, useState } from "react";
import fetchMovieReviews from "../Apis/movieReview";
import { styled } from "styled-components";
import ReviewCard from "./ReviewCard";

function MovieReviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const fetchedReviews = await fetchMovieReviews(movieId);
      setReviews(fetchedReviews);
      console.log(reviews);
    };
    getReviews();
  }, [movieId]);

  return (
    <Style>
      <div className="review-section">
        <h4>Reviews</h4>

        <div className="review-box">
          {reviews.length ==0 && <h5>No Reviews</h5>}
          {
            reviews.map((item) => (
              <ReviewCard item={item}/>
            ))
          }
        </div>
      </div>
    </Style>
  );
}

export default MovieReviews;

const Style = styled.main`

.review-section{
  margin-top:1rem;
  /* padding: 0 2rem; */
}



`;
