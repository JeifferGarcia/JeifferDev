import React, { Fragment } from "react";
import CardSkill from "../components/CardSkill";

import "./styles/Skill.css";

const Skill = () => (
  <Fragment>
    <div className='Skill'>
      <h2 className='Skill__title'>$ls Mis skills</h2>
      <div className='Skill__container_grid'>
        <CardSkill icon='icon-javascript' title='JavaScript' />
        <CardSkill icon='icon-html5' title='HTML' />
        <CardSkill icon='icon-css3' title='CSS' />
        <CardSkill icon='icon-react' title='React Js' />
        <CardSkill icon='icon-git' title='GIT' />
        <CardSkill icon='icon-bootstrap' title='Bootstrap' />
        <CardSkill icon='icon-redux' title='Redux' />
        <CardSkill icon='icon-webpack' title='Webpack' />
      </div>
    </div>
  </Fragment>
);

export default Skill;
