import React from "react";

import style from "./AbstractCTA.module.css";

import logo from "../../assets/logo.png";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";

const AbstractCTA = () => {
  return (
    <div className={style.abstractCTA}>
      <img src={logo} width="120px" />
      <div>
        <h2 className={style.heading}>
          FROM CONCEPT TO{" "}
          <strong style={{ fontWeight: "900", color: "lightgoldenrodyellow" }}>
            CREATION
          </strong>
        </h2>
        <h2 className={style.heading}>
          LET's MAKE IT{" "}
          <strong style={{ fontWeight: "900", color: "lightgoldenrodyellow" }}>
            HAPPEN!
          </strong>
        </h2>
      </div>
      <PrimaryButton text={"Get In Touch"} />
      <h3 className={style.subheading}>
        I'm available for full-time roles & freelance projects.
      </h3>
      <p className={style.text}>
        I thrive on crafting dynamic web applications, and delivering seamless
        user experiences.
      </p>
    </div>
  );
};

export default AbstractCTA;
