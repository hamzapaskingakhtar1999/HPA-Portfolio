import React from "react";
import style from "./GlowingTexts.module.css";

const GlowingTexts = ({ text }) => {
  return <span className={style.glowingTexts}>{text}</span>;
};

export default GlowingTexts;
