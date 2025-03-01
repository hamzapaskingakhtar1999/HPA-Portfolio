import React from "react";

import style from "./About.module.css";
import AboutMe from "../../components/AboutMe/AboutMe";
import AbstractCTA from "../../components/AbstractCTA/AbstractCTA";

const About = () => {
  return (
    <div className={style.about}>
      <AboutMe />
      <AbstractCTA />
    </div>
  );
};

export default About;
