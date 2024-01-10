import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'

export default function Popup({setShowPopup,videoUrl}) {


    useEffect(() => {
        const iframe = document.querySelector('.video-player');
        iframe.src = videoUrl;
      }, []);
    
    useEffect(()=>{
        document.body.style.overflow = "hidden";

        return ()=> {
            document.body.style.overflow = "visible";
        }
    },[])
    
  return (
    <Style onClick={()=>setShowPopup(false)}>
        <div className="popup-body" onClick={(e)=>setShowPopup(false)} >
        <iframe
              className="video-player"
              width="1000"
              height="500"
              src={videoUrl}
              title="YouTube Video Player"
              frameBorder="0"
              allowFullScreen
            ></iframe>

        </div>
    </Style>
  )
}

const Style = styled.div`
 width: 100%;
 height: 100vh;
 position: fixed;
 z-index: 999;
 top:0;
 left: 0;
 background: rgba(0,0,0,0.7);
 display: grid;
 place-items: center;
 .popup-body{
    background-color: white;
    padding: 0.5rem;
    color: black;
    position: relative;

    .close{
        position: absolute;
        right: 1rem;
        top: 0;
        cursor: pointer;
    }
 }
`
