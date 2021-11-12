import React, { Fragment } from "react";
import Character from "../components/Character";

import "./styles/About.css";

const About = () => (
  <Fragment>
    <div className='About'>
      <h2 className='About__title'>$ls /Sobre mí</h2>
      <Character />
      <p className='About__description'>
        Hola mundo, soy Jeiffer Garcia un apasionado por la tecnología frontend,
        me caracterizo por ser una persona amable, creativa y responsable.{" "}
        <br /> <br /> Soy un persona que esta en constante emprendisaje, soy
        arriesgado y no le tengo miedo a desafios.
      </p>
    </div>
  </Fragment>
);

export default About;
