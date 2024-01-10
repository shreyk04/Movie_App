import React, { useState } from 'react'
import { styled } from 'styled-components';

function ReviewCard({item}) {

    const avatarPath = item.author_details?.avatar_path ?? '';
    const imgSrc=avatarPath?`https://www.themoviedb.org/t/p/w128_and_h128_face/${avatarPath}`:"https://www.gravatar./avatar/00000000000000000000000000000000?d=mp"

    const [showFullReview,setShowFullReview]=useState(false)

    const toggleReview=()=>{
        setShowFullReview(!showFullReview)
    }
  return (
    <Style>
        <div className="review-card">
                <div className="author-img">
                  <img
                    src={imgSrc}
                    alt={``}
                  />
                </div>
                <div className="review-content">
                  <h4> A review by {item.author}</h4>
                  
                  <p >Written by {item.author} on</p>
                  <p className={`review ${showFullReview ?"expanded":" "}`}>{item.content}</p>
                  {
                    item.content.length>150 &&(
                        <button className="see-more" onClick={toggleReview}>{showFullReview?'See Less':'See More'}</button>
                    )
                  }
                   
                </div>
              </div>
    </Style>
  )
}

export default ReviewCard

const Style=styled.div`
.review-card{
    border: 1px solid gray;
    border-radius: 10px;
    display:flex;
    /* background-color: #2266a1; */
    margin: 1rem 0;
    padding: 1rem;

    .author-img img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .review-content{
        margin-left: 1rem;
        h4{
            font-size: 1.2rem;
            margin-bottom:1rem;
        }
        .review{
            font-size: 0.7rem;
            margin-top: 1rem;
            max-height: 50px;
            overflow: hidden;
            transition: max-height 5s ease-out;

        }
        .review.expanded{
          max-height: none;
        }
        .see-more {
        background: none;
        border: none;
        color: red;
        cursor: pointer;
        font-size: 0.7rem;
        margin-top: 0.5rem;
        padding: 0;
      }
      
    }
}
    
`