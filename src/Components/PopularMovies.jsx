import React from 'react'
import styled from 'styled-components';

function PopularMovies({movieItem}) {
    const imgSrc=`https://image.tmdb.org/t/p/original/${movieItem.poster_path}`;
  return (
  <Style>
    {/* <div className="movie-card"> */}

      <img src={imgSrc} alt="" className='poster-img'/>
      <p className='movie-title'>{movieItem && movieItem.original_title}</p>
    {/* </div> */}
  </Style>
  )
}

export default PopularMovies;

const Style=styled.div`
width: 200px;
height: 300px;
/* background-color: aqua; */
display: flex;
border-radius: 1rem;
text-align: center;
margin-top: 1rem;
/* flex-direction: column; */

    flex-direction: column;
    .poster-img{
    width: 200px;
    height: 80%;
    border-radius: 1rem;

}
.movie-title{
height: 20%;
margin-top: 1rem;
font-size: 1.2rem;
color: whitesmoke;
}

`