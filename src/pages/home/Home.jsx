import React from "react";
import Hero from "../../components/Hero/Hero";
import Grid from "../../components/Grid/Grid";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import MyTechStack from "../../components/MyTechStack/MyTechStack";
import Marquee from "../../components/Marquee/Marquee";

const Home = () => {
  return (
    <div>
      <Hero />
      <Grid />
      <SectionHeader
        firstHeading={"My"}
        secondHeading={"Tech Stack"}
        subHeading={"I CONSTANTLY TRY TO IMPROVE MY"}
      />
      <MyTechStack />
      <Marquee />
    </div>
  );
};

export default Home;
