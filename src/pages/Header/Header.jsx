import React from 'react'
import "./header.css"
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <div className="header-left">
            <NavLink to="/"><img className='header-logo link' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="" /> </NavLink>
            <NavLink to="/movies/popular" className='link'>Popular</NavLink>
            <NavLink to="/movies/top_rated" className='link'>Top Rated</NavLink>
            <NavLink to="/movies/upcoming" className='link'>Upcoming</NavLink>
        </div>
    </div>
  )
}
export default Header;
