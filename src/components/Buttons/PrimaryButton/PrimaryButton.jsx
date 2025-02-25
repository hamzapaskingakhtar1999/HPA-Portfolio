import React from "react";

import styles from "./PrimaryButton.module.css";
import { FaArrowRight } from "react-icons/fa6";

const PrimaryButton = ({ text }) => {
  return (
    <div className={styles.buttonContainer}>
      <div className={styles.button}>
        <p className={styles.buttonText}>{text}</p>
        <div className={styles.arrowIcon}>
          <FaArrowRight color="black" size={20} />
        </div>
      </div>
    </div>
  );
};

export default PrimaryButton;
