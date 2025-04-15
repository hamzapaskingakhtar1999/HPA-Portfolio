import React from "react";

import style from "./TechStackContainer.module.css";

const TechStackContainer = ({ logo, text }) => {
  return (
    <div className={style.techStackContainer}>
      <img src={logo} className={style.techStackLogo} />
      <p className={style.techStackText}>{text}</p>
    </div>
  );
};

export default TechStackContainer;
