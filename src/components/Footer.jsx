import React, { Fragment } from "react";

import heart from "../assets/images/heart.svg";
import "./styles/Footer.css";

const Footer = () => (
  <Fragment>
    <footer className='Footer'>
      <div className='Footer__social'>
        <p>Redes Sociales</p>
        <div className="Footer__socialMeida">
          <a
            href='https://www.instagram.com/jeifferg/?hl=es-la'
            target='__blank'>
            <span className="icon-instagram" ></span>
          </a>

          <a href='https://twitter.com/JheifferG' target='__blank'>
            <span className="icon-twitter" ></span>
          </a>

          <a
            href='https://www.linkedin.com/in/jeiffer-garcias-289032122/'
            target='__blank'>
            <span className="icon-linkedin" ></span>
          </a>

          <a href='https://github.com/JeifferGarcia' target='__blank'>
            <span className="icon-github" ></span>
          </a>
        </div>
      </div>
      <div className="copy">
        <span>Echo con
          <span className="container__heart">
            <img className='heart' src={heart} alt="" />
          </span>por</span>
        <br />
        <span>JeifferG</span>
      </div>
    </footer>
  </Fragment>
);
export default Footer;
