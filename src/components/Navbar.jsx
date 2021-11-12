import React, { Fragment, useEffect, useState } from 'react'

import logo from "../assets/images/logo.svg"

import "./styles/Navbar.css"

const Navbar = () =>{


return (
  <Fragment>
    <nav className="Navbar">
    <div id="btn" className="Navbar__hamburger"></div>
      <a href="/">
        <img src={logo} alt="Logo Jeiffer G" />
      </a>
    </nav>
  </Fragment>
)
}
export default Navbar
