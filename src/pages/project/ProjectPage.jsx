import React, { useEffect } from "react";

import style from "./ProjectPage.module.css";

import Project from "../../components/projects/Projects";
import AbstractCTA from "../../components/AbstractCTA/AbstractCTA";
import FeaturedProjects from "../../components/FeaturedProjects/FeaturedProjects";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

const ProjectPage = () => {
  useEffect(() => {
    document.title = "HPA | Sample Projects";
  }, []);
  return (
    <div className={style.project}>
      <SectionHeader
        subHeading={"FEATURED CASE STUDIES"}
        firstHeading={"Curated"}
        secondHeading={"Work"}
      />
      <FeaturedProjects />
      {/*      <Project />
      <AbstractCTA /> */}
    </div>
  );
};

export default ProjectPage;
