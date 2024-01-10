import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import fetchCastInfo from "../Apis/movieCastInfo";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import fetchCastMovies from "../Apis/castMovies";
import Acting from "./Acting";
import PopularMovies from "./PopularMovies";
import fetchPopularMovies from "../Apis/popularMovies";
import { genderNumberToNameMapping } from "../Utility/generic";

function MovieCastDetail() {
  const [cast, setCast] = useState("");
  const[castActing,setCastActing]=useState([]);
  const[popularMovies,setPopularMovies]=useState([]);
  const { id } = useParams();

  const fetchCastData = async () => {
    const data = await fetchCastInfo(id);
    setCast(data);
    console.log(data);
  };

  useEffect(() => {
    fetchCastData();
  }, [id]);
  
  const castMovies = async () => {
    const cdata = await fetchCastMovies(id);
    setCastActing(cdata);

  };

  useEffect(() => {
    castMovies();
  }, [id]);


  const getPopularMovies=async()=>{
    const popularMoviesData=await fetchPopularMovies(id);
    setPopularMovies(popularMoviesData)

  }

  useEffect(() => {
    getPopularMovies();
  }, [id]);


  const profile_url = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${cast.profile_path}`;

  const[showFullBiography,setShowFullBiography]=useState(false)

  const toggleBiography=()=>{
    setShowFullBiography(!showFullBiography);
  }

  return (
    <Style>
      <div className="content-wrapper">
        {/* <button onClick={fetchData}>click to see cast info</button> */}
        <div className="left-info">
          <div className="profile-wrapper">
            <img className="cast-profile" src={profile_url} alt="not found" />

          </div>
          <div className="column">
            <div className="full-wrapper">
                <div className="social-links">
                    <div className="icon">
                        <a href=""> <FaInstagram/></a>
                    </div>
                    <div className="icon">
                        <a href=""> <FaTwitter/></a>
                    </div>
                    <div className="icon">
                        <a href=""> <FaFacebook/></a>
                    </div>
                </div>
                <h3>Personal Info</h3>
                <div className="personal-info-section">
                    <p> <strong>Known For</strong> {cast&& cast.known_for_department}</p>
                    <p> <strong>Gender</strong> {cast&& genderNumberToNameMapping[cast.gender]}  </p>
                    <p> <strong>Birthday</strong> {cast&& cast.birthday}</p>
                    <p> <strong>Place of Birth</strong> {cast&& cast.place_of_birth}</p>
                    <p> <strong>Also Known as</strong> {cast&& cast.also_known_as}</p>
                </div>
            </div>
          </div>
        </div>
        <div className="right-info">
          <div className="cast-name">
            <h1>{cast.name}</h1>
          </div>
          <div className="cast-biography">
            <strong className="bio-title">Biography</strong>
            <p className={`biography-content ${showFullBiography?'expanded':""}`}>{cast && cast.biography}</p>
            {
               cast.biography&& cast.biography.length >100 && <button onClick={toggleBiography} className="see-more">{showFullBiography?"See Less":"See More"}</button>
            }
          </div>

          {/* <button onClick={castMovies}>click for more info</button> */}

         
          <div className="popular-movies">
            <h3>Known For</h3>
            <div className="movie-row">

            {popularMovies.map((movieItem) => (
                <NavLink to={`/movie/${movieItem.id}`}  className="movieLink">
                     <PopularMovies key={movieItem.id} movieItem={movieItem} />
                </NavLink>
                ))}
                </div>
          </div>
          <div className="cast-acting">
            <h3>Acting</h3>
            {
            
                castActing.map((item)=>(

                    <Acting item={item}/>
                ))
            }
          </div>
        </div>
      </div>
    </Style>
  );
}

export default MovieCastDetail;

const Style = styled.main`
  width: 100%;
  height: 100%;
  /* background-color: aliceblue; */
  .content-wrapper {
    width: 100%;
    /* background-color: blue; */
    display: flex;
    padding: 1.5rem;
  }

  .left-info {
    /* background-color: orange; */
    min-width: 300px;
    width: 300px;
   margin-right: 1.5rem;
    .profile-wrapper {
      width: 100%;
      height: 100%;
      display: block;
      min-width: 300px;
      width: 300px;
      height: 450px;
      position: relative;
      top: 0;
      left: 0;
      
      .cast-profile {
          width: 100%;
          height: 100%;
          border-radius: 10px;
      }


    }

    .column{
        margin-top: 2rem;
        .full-wrapper{
            .social-links{
                display: flex;
                .icon a{
                    margin-right:1rem;
                    color: #f1f1f1;
                }
            }
            h3{
                margin:1rem 0;
            }
            .personal-info-section{
                p{
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 1rem;
                    strong{
                        margin-bottom:0.2rem;
                    }
                }
            }
        }
    }
  }

  .right-info {
    /* background-color: pink; */
    width: 100%;
    padding: 2rem;

    .cast-name{
        margin-bottom: 2rem;
    }

    .cast-biography{
        .biography-content{
            margin-top:1rem;
            max-height: 200px;
            overflow: hidden;
            transition: max-height 0.3s ease;
            line-height: 1.4rem;
            
        }
        .biography-content.expanded{
            max-height: none;
            
            
        }
        .see-more {
        background: none;
        border: none;
        color: black;
        cursor: pointer;
        font-size: 0.9rem;
        margin-top: 0.5rem;
        padding: 0;

      }
        

    }

    .movie-row{
        width: 820px;
        overflow-x: auto;
    gap: 1rem;
    display: flex;
    align-items: center;
    margin-bottom:1rem;
    padding-bottom: 0.5rem;
    }
    .movie-row::-webkit-scrollbar {
    height: 5px;
  }

  /* Track */
  .movie-row::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  .movie-row::-webkit-scrollbar-thumb {
    background: #d41c1c;
  }

  /* Handle on hover */
  .movie-row::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  .movieLink{
    text-decoration: none;
  }
  }
`;
