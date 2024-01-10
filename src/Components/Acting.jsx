import React from 'react'
import styled from 'styled-components'

function Acting({item}) {
  return (
    <Style>
      {item && (
        <>
          <div className="movie-year">
            <h4>{item.release_date && item.release_date.slice(0, 4)}</h4>
          </div>
          <div className="movie-character">
            <h4>{item.original_title}</h4>
            <p>as {item.character}</p>
          </div>
        </>
      )}
    </Style>
  )
}

export default Acting

const Style=styled.div`
display: flex;
justify-content: space-around;
/* background-color: aliceblue; */
border: 1px solid white;
width: 100%;
padding: 1rem;
margin: 1rem;

.movie-year{
    width: 20%;

}
.movie-character{
    width: 80%;
}

`