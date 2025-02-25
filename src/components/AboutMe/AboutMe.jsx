import React from "react";

import style from "./AboutMe.module.css";

import SectionHeader from "../../components/SectionHeader/SectionHeader";

import avatar from "../../assets/avatar.png";

import SocialIcons from "../Social Icons/SocialIcons";

const AboutMe = () => {
  return (
    <div className={`compress ${style.aboutMe}`}>
      <div className={style.left}>
        <h3 className={style.subTitle}>MORE ABOUT ME</h3>
        <h2 className={style.title}>
          Full-Stack Development | Data Analysis and a little bit of{" "}
          <span className={style.gradientText}>everything</span>
        </h2>
        <p className={style.leftText}>
          I'm Hamza Pasking Akhtar, a Full-Stack Developer and Data Analyst
          passionate about building dynamic web applications and uncovering
          insights from data. As a developer, I thrive on crafting seamless user
          experiences and developing efficient backend systems using React and
          Node.js. As a data analyst, I enjoy working with data to extract
          meaningful patterns, drive decision-making, and optimize processes.
        </p>
        <p className={style.leftText}>
          Beyond work, I'm always exploring new ideas and staying curious. I
          believe in maintaining a balance in life and embracing every
          opportunity to grow.
        </p>
        <p className={style.leftText}>
          Each day is a chance to make an impact, and I wake up ready to do just
          that!
        </p>
        <SocialIcons />
      </div>
      <div className={style.right}>
        <img src={avatar} className={style.rightImage} />
      </div>
    </div>
  );
};

export default AboutMe;
