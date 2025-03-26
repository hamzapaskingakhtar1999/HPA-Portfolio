import React, { useEffect, useState } from "react";
import style from "./FeaturedProjects.module.css";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import TechStackContainer from "../TechStackContainer/TechStackContainer";
import css from "../../assets/Tech Stack/css.svg";

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
            <h2 className={style.leftTopTitle}>
              A platform connecting students and instructors for enhanced
              <br />
              learning experiences.
            </h2>
            <IoIosArrowForward size={30} />
          </div>
          <img
            src="https://aayushbharti.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fzenith.9208c264.jpg&w=1200&q=75"
            className={style.image}
          />
        </div>
      </div>
      {/* RIGHT */}
      <div className={style.right}>
        <h1 className={style.rightTitle}>Random Title</h1>
        <p className={style.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          accusamus magni cum ipsum, aliquam nemo quidem architecto quo
          consequatur praesentium totam adipisci veniam temporibus molestiae
          molestias incidunt consectetur ea eveniet.
        </p>
        <TechStackContainer logo={css} text={"CSS"} />
      </div>
    </div>
  );
};

export default FeaturedProjects;
