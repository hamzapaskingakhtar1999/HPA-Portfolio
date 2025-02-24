import React from "react";

import style from "./AboutMe.module.css";

import SectionHeader from "../../components/SectionHeader/SectionHeader";

import avatar from "../../assets/avatar.png";

import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si";

const AboutMe = () => {
  return (
    <div className={`compress ${style.aboutMe}`}>
      <div className={style.left}>
        <h3 className={style.subTitle}>MORE ABOUT ME</h3>
        <h2 className={style.title}>
          Full-Stack Developer and a little bit of{" "}
          <span className={style.gradientText}>everything</span>
        </h2>
        <p className={style.leftText}>
          I'm Hamza Pasking Akhtar, a proactive full-stack developer passionate
          about building dynamic and seamless web applications. From crafting
          intuitive frontends to developing robust backends, I enjoy tackling
          complex challenges with clean and efficient code. My expertise
          includes React, Next.js, and Node.js, and I'm always eager to expand
          my skill set.
        </p>
        <br />
        <p className={style.leftText}>
          Beyond coding, I'm constantly exploring new ideas and staying curious.
          I believe in maintaining a balance in life and embracing every
          opportunity to grow.
        </p>
        <br />
        <p className={style.leftText}>
          Each day is a chance to make an impact, and I wake up ready to do just
          that!
        </p>
        {/* Social Icons */}
        <div className={style.socialIcons}>
          <CiLinkedin color="white" size={25} className={style.social} />
          <FaGithub color="white" size={25} className={style.social} />
          <FaInstagram color="white" size={25} className={style.social} />
          <SiLeetcode color="white" size={25} className={style.social} />
        </div>
      </div>
      <div className={style.right}>
        <img src={avatar} className={style.rightImage} />
      </div>
    </div>
  );
};

export default AboutMe;
