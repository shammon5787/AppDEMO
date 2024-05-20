import React from 'react'
import './Navbar.css'
import logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <div className="nav-logo">
            <img src= {logo} alt="" />
        </div>
        <div>
            <ul className="nav-menues">
                <li>Home</li>
                <li>Explore</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
    <hr />
    </>
  )
}

export default Navbar