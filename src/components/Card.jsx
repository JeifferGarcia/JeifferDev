import React, { Fragment } from "react";
import Button from "./Button";

import "./styles/Card.css";

const Card = (props) => (
  <Fragment>
    <div className='Card'>
      <img className='Card__img' src={props.url} alt={props.alt} />
      <h2 className='Card__title'>{props.title}</h2>
      <p className='Card__description'>{props.description}</p>
      <Button location={props.location} name='ver' />
    </div>
  </Fragment>
);

export default Card;
