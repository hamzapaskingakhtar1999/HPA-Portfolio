import React from "react";

import styles from "./icontext.module.css";

const IconText = ({ icon, title }) => {
  return (
    <div className={styles.container}>
      {/* Icon + Text */}
      <img src={icon} style={{ width: "25px", height: "25px" }} />
      <p style={{ color: "#012867", fontWeight: "600" }}>{title}</p>
    </div>
  );
};

export default IconText;
