import React, { Fragment } from "react";

import Home from "../pages/Home";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Footer from "../components/Footer";
import Skill from "../pages/Skill";
const App = () => (
  <Fragment>
    <Home />
    <About />
    <Skill />
    <Portfolio />
    <Footer />
  </Fragment>
);

export default App;
