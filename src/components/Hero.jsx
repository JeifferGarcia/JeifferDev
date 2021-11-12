import React, { Fragment } from "react";
import Button from "./Button";
import Navbar from "../components/Navbar";

import ilustration from "../assets/images/Ilustration.svg";

import "./styles/Hero.css";

const Hero = () => (
  <Fragment>
    <div className='Hero'>
      <Navbar />

      <figure className='ilustration__container'>
        <img className='ilustration__container__img' src={ilustration} alt='' />
      </figure>

      <hgroup>
        <h2 className='Hero__subtitle1'>¡Hola Mundo!</h2>
        <h1 className='Hero__title'>Soy Jeiffer Garcia</h1>
        <h2 className='Hero__subtitle2'>Frontend Developer</h2>
      </hgroup>
    </div>
  </Fragment>
);

export default Hero;
