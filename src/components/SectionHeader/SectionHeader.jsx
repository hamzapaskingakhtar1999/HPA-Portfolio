import React from "react";

import style from "./SectionHeader.module.css";

const SectionHeader = ({ firstHeading, secondHeading, subHeading }) => {
  return (
    <div className={style.sectionHeader}>
      <h3 className={style.subHeading}>{subHeading}</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "15px",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "nowrap",
        }}
      >
        <h2 className={style.firstHeading}>
          {firstHeading}{" "}
          <span className={style.secondHeading}>{secondHeading}</span>
        </h2>
      </div>
    </div>
  );
};

export default SectionHeader;
