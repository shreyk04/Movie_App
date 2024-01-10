import React from 'react'
import { styled } from 'styled-components'

export default function ProfileTile({profile_path="pic.jpg", character="Chris Hemsworth", name="Thor" ,id="1"}) {
  return (
    <Style>
           <div className="pic-wrapper">
            <div className="pic">
                <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${profile_path}`} alt="" className="profile" />
            </div>
           </div>
            <div className="text">
                <div className="title">
                   {character}
                </div>
                <div className="character">
                    {name}
                </div>
               
            </div>
           
    </Style>
  )
}

const Style = styled.div`
       /* min-width: 150px; */
       width: 100%;
       box-sizing: border-box;
       display: grid;
       grid-template-columns: 2fr 3fr;
       background-color: #3a3a3a75;
       padding: 1rem;
       border-radius: 4px;
       transition: all linear .4s;
       gap: 1rem;
       box-shadow: inset 0 0 0.5px 1px hsla(0, 0%,  
              100%, 0.075),
              /* shadow ring 👇 */
              0 0 0 1px hsla(0, 0%, 0%, 0.05),
              /* multiple soft shadows 👇 */
              0 0.3px 0.4px hsla(0, 0%, 0%, 0.02),
              0 0.9px 1.5px hsla(0, 0%, 0%, 0.045),
              0 3.5px 6px hsla(0, 0%, 0%, 0.09);      cursor: pointer;
       &:hover{
        background-color: #000000;
        .pic{
            img{
                scale: 1.1;
                transform-origin: center;
            }
        }
        }

        .pic-wrapper{
            display: grid;
                    place-items: center;
                    /* width: 200px; */

            .pic{
            overflow: hidden;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            img{
                width: 100px;
                height: 100px;
                border-radius: 50%;
                transition: all ease-in-out .3s;
            }
        }
        }
       
        

        .text{
            display: flex;
            width: 100px;
            flex-direction  : column;
            height: 100%;
            justify-content: center;
            gap: 7px;
            .title{
                font-size: 1rem;
                font-weight: 600;
                cursor: pointer;
                color: whitesmoke;
               
            }
            .character{
                font-size: 1.1rem;
                font-weight: 300;
                color: #3f3f3f;
                color: gray;

            }
        }
`
