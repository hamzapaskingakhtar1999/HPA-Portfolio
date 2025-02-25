import React from "react";

import style from "./SocialIcons.module.css";

import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si";

const SocialIcons = () => {
  return (
    <div className={style.socialIcons}>
      <a href="https://www.linkedin.com/in/hamza-pasking-akhtar/">
        <CiLinkedin color="white" size={25} className={style.social} />
      </a>
      <a href="https://github.com/hamzapaskingakhtar1999">
        <FaGithub color="white" size={25} className={style.social} />
      </a>
      <a href="https://www.instagram.com/hamzapaskingakhtar/">
        <FaInstagram color="white" size={25} className={style.social} />
      </a>
      <a href="https://leetcode.com/u/hamzapaskingakhtar/">
        <SiLeetcode color="white" size={25} className={style.social} />
      </a>
    </div>
  );
};

export default SocialIcons;
