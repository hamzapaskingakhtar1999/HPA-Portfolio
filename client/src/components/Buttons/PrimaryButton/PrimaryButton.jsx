import React from "react";

import styles from "./PrimaryButton.module.css";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const PrimaryButton = ({ text, redirect = "/bookacall" }) => {
  const navigate = useNavigate();
  return (
    <div
      className={styles.buttonContainer}
      onClick={() => `${navigate(`${redirect}`)}`}
    >
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
