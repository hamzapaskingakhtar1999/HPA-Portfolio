import React from "react";

import style from "./Footer.module.css";
import SocialIcons from "../Social Icons/SocialIcons";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";

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
          <Link to="/" className={style.linksText}>
            Home
          </Link>
          <Link to="/project" className={style.linksText}>
            Projects
          </Link>
          <Link to="/about" className={style.linksText}>
            About
          </Link>
        </div>
        <div className={style.links2}>
          <h3 className={style.linksTitle}>The Website</h3>
          <Link to="/" className={style.linksText}>
            Guest Book
          </Link>
          <Link to="/" className={style.linksText}>
            Bucket List
          </Link>
          <Link to="/bookacall" className={style.linksText}>
            Book a Call
          </Link>
        </div>
      </div>
      {/* CTA */}
      <div className={style.cta}>
        <p className={style.ctaText}>
          Feel free to reach out to me for any inquiries or collaboration
          opportunities.
        </p>
        <a href="mailto:hamzapaskingakhtar@gmail.com" className={style.anchor}>
          <MdOutlineMail size={25} />
          hamzapaskingakhtar@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Footer;
