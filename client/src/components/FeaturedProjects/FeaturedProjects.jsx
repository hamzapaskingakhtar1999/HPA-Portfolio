import React, { useEffect, useState } from "react";
import style from "./FeaturedProjects.module.css";

import data from "./Data";

import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import TechStackContainer from "../TechStackContainer/TechStackContainer";

const FeaturedProjects = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isCursorVisible, setIsCursorVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsCursorVisible(true);
  };

  const handleMouseLeave = () => {
    setIsCursorVisible(false);
  };

  const handleMouseMove = (e) => {
    const leftContainerRect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - leftContainerRect.left - 6 * 16;
    const y = e.clientY - leftContainerRect.top - 4 * 16;

    setCursorPosition({
      x,
      y,
    });
  };

  const variants = {
    default: {
      x: cursorPosition.x,
      y: cursorPosition.y,
      opacity: 1,
      transition: {
        type: "ease",
      },
    },
  };

  return (
    <div className={`${style.featuredProjects} compress`}>
      {data.map((item) => {
        return (
          <div className={`${style.featuredProject}`}>
            {/* LEFT */}
            <div className={style.left}>
              <div
                className={style.leftContainer}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {isCursorVisible && (
                  <motion.div
                    className={style.visitWebsiteCursor}
                    initial={{ opacity: 0 }}
                    variants={variants}
                    animate="default"
                  >
                    <p>View Website</p>
                  </motion.div>
                )}
                <div className={style.leftTop}>
                  <h2 className={style.leftTopTitle}>{item.leftTitle}</h2>
                  <IoIosArrowForward size={30} />
                </div>
                <img src={item.leftImage} className={style.image} />
              </div>
            </div>
            {/* RIGHT */}
            <div className={style.right}>
              <h1 className={style.rightTitle}>{item.rightTitle}</h1>
              <p className={style.description}>{item.rightDescription}</p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: ".5rem",
                  flexWrap: "wrap",
                  marginTop: "1rem",
                }}
              >
                {item.rightLogo.map((item) => {
                  return (
                    <TechStackContainer logo={item.logo} text={item.text} />
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedProjects;
