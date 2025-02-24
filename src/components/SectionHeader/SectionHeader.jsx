import React from "react";

import style from "./SectionHeader.module.css";

const SectionHeader = ({ firstHeading, secondHeading, subHeading }) => {
  return (
    <div className={style.sectionHeader}>
      <h3 className={style.subHeading}>{subHeading}</h3>
      <span style={{ display: "flex", gap: "20px" }}>
        <h2 className={style.firstHeading}>{firstHeading}</h2>
        <h2 className={style.secondHeading}>{secondHeading}</h2>
      </span>
    </div>
  );
};

export default SectionHeader;
