import React, { useEffect } from "react";

import style from "./ProjectPage.module.css";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

import Project from "../../components/projects/Projects";
import AbstractCTA from "../../components/AbstractCTA/AbstractCTA";

const ProjectPage = () => {
  useEffect(() => {
    document.title = "HPA | Sample Projects";
  }, []);
  return (
    <div className={style.project}>
      <Project />
      <AbstractCTA />
    </div>
  );
};

export default ProjectPage;
