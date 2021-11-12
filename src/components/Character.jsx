import React from "react";
import photo from "../assets/images/ilustration2.jpg";

import "./styles/Character.css";

const Character = (props) => (
  <div className='Character'>
    <img className='Character__img' src={photo} alt={props.alt} />
  </div>
);

export default Character;
