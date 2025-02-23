import React, { useEffect, useState } from "react";

import style from "./Grid.module.css";

import { FaShieldHeart } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";

/* Globe */
import globe from "../../assets/Home/globe.png";
import logo from "../../assets/logo.png";

const Grid = () => {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  function getCurrentTime() {
    const date = new Date();
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    return new Intl.DateTimeFormat("en-US", options).format(date).slice(0, 8);
  }

  return (
    <div className={`${style.grid} compress`}>
      {/* Collaboration */}
      <div className={`${style.box1} ${style.box}`}>
        <FaShieldHeart size={50} color="lightslategray" />
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
        <img className={style.box2Globe} src={globe}></img>
        <div className={style.box2Bottom}>
          <MdLocationPin
            size={50}
            color="lightslategray"
            style={{ marginBottom: "10px" }}
          />
          <h3 className={style.box2BottomSubHeading}>Remote</h3>
          <h2 className={style.box2BottomHeading}>Ireland - {currentTime}</h2>
        </div>
      </div>

      {/* Tech Enthusiast */}
      <div className={`${style.box} ${style.box3}`}>
        <div className={style.box3Bottom}>
          <FaLaptopCode
            size={50}
            color="lightslategray"
            style={{ marginBottom: "10px" }}
          />
          <h3 className={style.box3BottomSubHeading}>Tech Enthusiast</h3>
          <h2 className={style.box3BottomHeading}>
            Passionate about cutting-edge development technologies
          </h2>
        </div>
      </div>
      <div className={`${style.box} ${style.box4}`}>
        <img src={logo} className={style.box4Logo} />
        <h1 className={style.box4Heading}>
          Let's work together on your next project
        </h1>
        <a className={style.button} href="mailto:hamzapaskingakhtar@gmail.com">
          Send an email
        </a>
      </div>
      <div className={`${style.box} ${style.box5}`}></div>
    </div>
  );
};

export default Grid;
