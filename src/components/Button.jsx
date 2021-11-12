import React from "react";

import "./styles/Button.css";

const Button = (props) => (
  <a className='Button' href={props.location} target='__blank'>
    {props.name}
  </a>
);

export default Button;
