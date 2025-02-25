import React from "react";

import style from "./Footer.module.css";
import SocialIcons from "../Social Icons/SocialIcons";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <div className={`${style.footer} compress`}>
      {/* Intro */}
      <div className={style.intro}>
        <h1 className={style.name}>Hamza Pasking Akthar</h1>
        <p className={style.text}>
          Help you create experiences where aesthetics & functionality
          seamlessly come together.
        </p>
        <SocialIcons />
      </div>
      {/* Links */}
      <div className={style.links}>
        <div className={style.links1}>
          <h3 className={style.linksTitle}>General</h3>
          <a href="#" className={style.linksText}>
            Home
          </a>
          <a href="#" className={style.linksText}>
            Projects
          </a>
          <a href="#" className={style.linksText}>
            About
          </a>
        </div>
        <div className={style.links2}>
          <h3 className={style.linksTitle}>The Website</h3>
          <a href="#" className={style.linksText}>
            Guest Book
          </a>
          <a href="#" className={style.linksText}>
            Bucket List
          </a>
          <a href="#" className={style.linksText}>
            Book a Call
          </a>
        </div>
      </div>
      {/* CTA */}
      <div className={style.cta}>
        <p className={style.ctaText}>
          Feel free to reach out to me for any inquiries or collaboration
          opportunities.
        </p>
        <a href="mailto:hamzapaskingakhtar@gmail.com" className={style.anchor}>
          <MdOutlineMail size={25}/>
          hamzapaskingakhtar@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Footer;
