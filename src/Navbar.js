import React from 'react'
import './navbar.css';
import pp from './blog-icon.png'
import {Link } from "react-router-dom";

const Navbar = () => {
    const user= false;
    const navitems = [
        {
          path: "Home Page",
          link_to: "/",
        },
        {
          path: "Profile",
          link_to: "/profileshow",
        },
        {
          path: "Write",
          link_to: "/write",
        },
        {
          path: "My Articles",
          link_to: "/articleview",
        },
      ];
  return (
    <div className='navbar-container'>
        <img className="navbar-logo" src={pp}/>
        <div className="navbar-left">
        {navitems.map((item, i) => (
          <Link
            style={{
              textDecoration: "none",
            }}
            key={i}
            to={`${item.link_to}`}
          >
            <li className="navbar-item">{item.path}</li>
          </Link>
        ))}
      </div>
        <div className='navbar-right'>   
            {
                !user?
                <>
                <Link to='/login'><button className='login-btn'>Log in</button></Link>
                <Link to='/signup'><button className='signup-btn'>Sign up</button>
                </Link></>
                :
                <button className='signup-btn'>Logout</button>
            }
        </div>
    </div>
  )
}

export default Navbar