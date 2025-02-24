import React, { useEffect, useState } from "react";

import style from "./Grid.module.css";

import { FaShieldHeart } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";

import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";

/* Globe */
import globe from "../../assets/Home/globe.png";
import logo from "../../assets/logo.png";

const Grid = () => {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  /* Box 1 */
  const [box1State, setBox1State] = useState(false);
  /* Box 2 */
  const [box2State, setBox2State] = useState(false);
  /* Box 3 */
  const [box3State, setBox3State] = useState(false);

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

  /* Box 1 Mouse Enter Leave */

  const box1MouseEnter = (e) => {
    setBox1State(true);
    console.log("Mouse 1 Enter");
  };

  const box1MouseLeave = (e) => {
    setBox1State(false);
    console.log("Mouse 1 Leave");
  };

  /* Box 2 Mouse Enter Leave */

  const box2MouseEnter = (e) => {
    setBox2State(true);
    console.log("Mouse 2 Enter");
  };

  const box2MouseLeave = (e) => {
    setBox2State(false);
    console.log("Mouse 2 Leave");
  };

  /* Box 3 Mouse Enter Leave */

  const box3MouseEnter = (e) => {
    setBox3State(true);
    console.log("Mouse 3 Enter");
  };

  const box3MouseLeave = (e) => {
    setBox3State(false);
    console.log("Mouse 3 Leave");
  };

  return (
    <div className={`${style.grid} compress`}>
      {/* Collaboration */}
      <div
        className={`${style.box1} ${style.box}`}
        onMouseEnter={(e) => box1MouseEnter()}
        onMouseLeave={(e) => box1MouseLeave()}
      >
        <FaShieldHeart
          size={50}
          color="lightslategray"
          className={style.icon}
        />
        <h3 className={style.box1SubHeading}>Collaboration and Satisfaction</h3>
        <h2 className={style.box1Heading}>
          I prioritize open communication and client satisfaction
        </h2>

        {box1State && (
          <div className={style.box1PopUp}>
            <span>Book a call</span>
            <GoArrowRight />
          </div>
        )}
      </div>

      {/* Timezone */}

      <div
        className={`${style.box} ${style.box2}`}
        onMouseEnter={(e) => box2MouseEnter()}
        onMouseLeave={(e) => box2MouseLeave()}
      >
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
            className={style.icon}
            style={{ marginBottom: "10px" }}
          />
          <h3 className={style.box2BottomSubHeading}>Remote</h3>
          <h2 className={style.box2BottomHeading}>Ireland - {currentTime}</h2>
        </div>
        {box2State && (
          <div className={style.box2PopUp}>
            <span>Connect now</span>
            <GoArrowRight />
          </div>
        )}
      </div>

      {/* Tech Enthusiast */}
      <div
        className={`${style.box} ${style.box3}`}
        onMouseEnter={(e) => box3MouseEnter()}
        onMouseLeave={(e) => box3MouseLeave()}
      >
        <div className={style.box3Bottom}>
          <FaLaptopCode
            size={50}
            color="lightslategray"
            className={style.icon}
            style={{ marginBottom: "10px" }}
          />
          <h3 className={style.box3BottomSubHeading}>Tech Enthusiast</h3>
          <h2 className={style.box3BottomHeading}>
            Passionate about cutting-edge development technologies
          </h2>
        </div>
        {box3State && (
          <div className={style.box3PopUp}>
            <span>Know more</span>
            <GoArrowRight />
          </div>
        )}
      </div>

      {/* Box 4 */}
      <div className={`${style.box} ${style.box4}`}>
        <img src={logo} className={style.box4Logo} />
        <h1 className={style.box4Heading}>
          Let's work together on your next project
        </h1>
        <a className={style.button} href="mailto:hamzapaskingakhtar@gmail.com">
          Send an email
        </a>
      </div>

      {/* Box 5 */}
      <div className={`${style.box} ${style.box5}`}></div>
    </div>
  );
};

export default Grid;
