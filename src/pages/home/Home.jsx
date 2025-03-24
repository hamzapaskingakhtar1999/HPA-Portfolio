import React, { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Grid from "../../components/Grid/Grid";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import MyTechStack from "../../components/MyTechStack/MyTechStack";
import Marquee from "../../components/Marquee/Marquee";
import Projects from "../../components/projects/Projects";
import AboutMe from "../../components/AboutMe/AboutMe";
import AbstractCTA from "../../components/AbstractCTA/AbstractCTA";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  useEffect(() => {
    document.title = "HPA Portfolio | Developer";
  }, []);
  return (
    <div>
      <Hero id="home" />
      <Grid />
      <SectionHeader
        firstHeading={"My"}
        secondHeading={"Tech Stack"}
        subHeading={"I CONSTANTLY TRY TO IMPROVE"}
      />
      <MyTechStack />
      <Marquee />
      <Projects />
      <AboutMe />
      <AbstractCTA />
    </div>
  );
};

export default Home;
