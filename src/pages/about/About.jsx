import React, { useEffect } from "react";

import style from "./About.module.css";
import AboutMe from "../../components/AboutMe/AboutMe";
import AbstractCTA from "../../components/AbstractCTA/AbstractCTA";

const About = () => {
  useEffect(() => {
    document.title = "HPA | About me";
  }, []);
  return (
    <div className={style.about}>
      <AboutMe />
      <AbstractCTA />
    </div>
  );
};

export default About;
