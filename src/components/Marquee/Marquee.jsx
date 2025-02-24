import React from "react";

import style from "./Marquee.module.css";

const Marquee = () => {
  return (
    <div className={style.marqueeContainer}>
      <div className={style.marqueeDummy}></div>
      <div className={style.marquee}>
        <ul className={style.marqueeContent}>
          <li>☆</li>
          <li>Secure</li>
          <li>☆</li>
          <li>Reliable</li>
          <li>☆</li>
          <li>Engaging</li>
          <li>☆</li>
          <li>Scalable</li>
          <li>☆</li>
          <li>Interactive</li>
          <li>☆</li>
          <li>Accessible</li>
          <li>☆</li>
          <li>Responsive</li>
          <li>☆</li>
          <li>Dynamic</li>
          <li>☆</li>
          <li aria-hidden="true">Secure</li>
          <li aria-hidden="true">☆</li>
          <li aria-hidden="true">Reliable</li>
          <li aria-hidden="true">☆</li>
          <li aria-hidden="true">Engaging</li>
          <li aria-hidden="true">☆</li>
          <li aria-hidden="true">Scalable</li>
          <li aria-hidden="true">☆</li>
          <li aria-hidden="true">Interactive</li>
          <li aria-hidden="true">☆</li>
          <li aria-hidden="true">Accessible</li>
          <li aria-hidden="true">☆</li>
          <li aria-hidden="true">Responsive</li>
          <li aria-hidden="true">☆</li>
          <li aria-hidden="true">Dynamic</li>
          <li aria-hidden="true">☆</li>
        </ul>
      </div>
    </div>
  );
};

export default Marquee;
