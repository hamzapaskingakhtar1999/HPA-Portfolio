import React from "react";

import style from "./MyTechStack.module.css";

import css from "../../assets/Tech Stack/css.svg";
import excel from "../../assets/Tech Stack/excel.svg";
import express from "../../assets/Tech Stack/express.svg";
import framer from "../../assets/Tech Stack/framer.svg";
import git from "../../assets/Tech Stack/git.svg";
import github from "../../assets/Tech Stack/github.svg";
import html from "../../assets/Tech Stack/html.svg";
import javascript from "../../assets/Tech Stack/javascript.svg";
import mongo from "../../assets/Tech Stack/mongodb.svg";
import node from "../../assets/Tech Stack/node.svg";
import postgre from "../../assets/Tech Stack/postgresql.svg";
import postman from "../../assets/Tech Stack/postman.svg";
import power from "../../assets/Tech Stack/powerbi.svg";
import python from "../../assets/Tech Stack/python.svg";
import react from "../../assets/Tech Stack/react.svg";
import tailwind from "../../assets/Tech Stack/tailwind.svg";
import vercel from "../../assets/Tech Stack/vercel.svg";
import TechStackContainer from "../TechStackContainer/TechStackContainer";

const MyTechStack = () => {
  const data = [
    {
      logo: css,
      text: "CSS",
    },
    {
      logo: excel,
      text: "Excel",
    },
    {
      logo: express,
      text: "Express",
    },
    {
      logo: framer,
      text: "Framer",
    },
    {
      logo: git,
      text: "Git",
    },
    {
      logo: github,
      text: "Github",
    },
    {
      logo: html,
      text: "HTML",
    },
    {
      logo: javascript,
      text: "JavaScript",
    },
    {
      logo: mongo,
      text: "MongoDB",
    },
    {
      logo: postgre,
      text: "PostgreSQL",
    },
    {
      logo: node,
      text: "NodeJS",
    },
    {
      logo: postman,
      text: "Postman",
    },
    {
      logo: power,
      text: "PowerBI",
    },
    {
      logo: python,
      text: "Python",
    },
    {
      logo: react,
      text: "ReactJS",
    },
    {
      logo: tailwind,
      text: "TailwindCSS",
    },
    {
      logo: vercel,
      text: "Vercel",
    },
  ];

  return (
    <div className={`compress ${style.myTechStack}`}>
      <div className={style.techStack}>
        {data.map((item, index) => {
          return (
            <TechStackContainer logo={item.logo} text={item.text} key={index} />
          );
        })}
      </div>
    </div>
  );
};

export default MyTechStack;
