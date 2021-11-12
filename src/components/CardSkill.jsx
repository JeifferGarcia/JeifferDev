import React, { Fragment } from "react";

import "./styles/CardSkill.css";

const CardSkill = (props) => (
  <Fragment>
    <div className='CardSkill'>
      <span className={props.icon}></span>
      <h3>{props.title}</h3>
    </div>
  </Fragment>
);
export default CardSkill;
