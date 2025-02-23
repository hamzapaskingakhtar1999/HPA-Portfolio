import React from "react";
import styles from "./Hero.module.css"; // Import CSS Module
import { FaArrowRight } from "react-icons/fa6";
import hero from "../../assets/Home/hero.png";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroHeading}>
          I create digital presence and turn ideas into digital experience
        </h1>
        <p className={styles.heroSubHeading}>
          Hello, I'm <strong>Hamza Pasking Akhtar</strong>, a Full Stack
          Developer
        </p>
        <div className={styles.buttonContainer}>
          <div className={styles.button}>
            <p className={styles.buttonText}>Let's connect</p>
            <div className={styles.arrowIcon}>
              <FaArrowRight color="black" size={20} />
            </div>
          </div>
        </div>
        <img className={styles.heroImage} src={hero} />
      </div>
    </div>
  );
};

export default Hero;
