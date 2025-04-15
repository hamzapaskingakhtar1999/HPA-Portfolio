import React from "react";
import styles from "./Hero.module.css"; // Import CSS Module
import hero from "../../assets/Home/hero.png";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroHeading}>
          I create digital{" "}
          <span style={{ fontFamily: "Kaushan Script" }}>presence</span> and
          turn ideas into digital{" "}
          <span style={{ fontFamily: "Kaushan Script" }}>experience</span>
        </h1>
        <p className={styles.heroSubHeading}>
          Hello, I'm <strong>Hamza Pasking Akhtar</strong>, a Full Stack
          Developer
        </p>
        <PrimaryButton text={"Let's Connect"} />
        <img className={styles.heroImage} src={hero} />
      </div>
    </div>
  );
};

export default Hero;
