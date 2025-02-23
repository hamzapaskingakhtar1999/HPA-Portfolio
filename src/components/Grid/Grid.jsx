import React from "react";

import style from "./Grid.module.css";

import { FaShieldHeart } from "react-icons/fa6";

/* Globe */
import Globe from "react-globe.gl";

const Grid = () => {
  return (
    <div className={`${style.grid} compress`}>
      {/* Collaboration */}
      <div className={`${style.box1} ${style.box}`}>
        <FaShieldHeart size={50} color="gray" />
        <h3 className={style.box1SubHeading}>Collaboration and Satisfaction</h3>
        <h2 className={style.box1Heading}>
          I prioritize open communication and client satisfaction
        </h2>
      </div>

      {/* Timezone */}

      <div className={`${style.box} ${style.box2}`}>
        <div className={style.box2Top}>
          <h1 className={style.box2Heading}>
            I'm very flexible with different
          </h1>
          <h1 className={style.box2SubHeading}>timezone communications</h1>
        </div>
        <div className={style.box2Bottom}>

        </div>
      </div>

      <div className={`${style.box} ${style.box3}`}></div>
      <div className={`${style.box} ${style.box4}`}></div>
      <div className={`${style.box} ${style.box5}`}></div>
    </div>
  );
};

export default Grid;
