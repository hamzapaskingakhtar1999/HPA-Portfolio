import React from "react";

import styles from "./projectsItem.module.css";
import { LuLink } from "react-icons/lu";
import IconText from "../iconText/IconText";
import { Link } from "react-router-dom";

const ProjectsItem = ({ item, color, index }) => {
  return (
    <div className={styles.container} style={{ backgroundColor: color[index] }}>
      {/* Left Image */}
      <div className={styles.left}>
        <img src={item.image} style={{ width: "100%", height: "100%" }} />
      </div>
      {/* Right Description */}
      <div className={styles.right}>
        <h2 className={styles.rightTitle}>{item.title}</h2>
        {/* Worked on */}
        <div
          style={{
            display: "flex",
            gap: "30px",
            flexDirection: "column",
            marginBottom: "10px",
          }}
        >
          <p className={styles.rightSubtitle}>Worked on</p>
          <div style={{ display: "flex", gap: "10px", marginTop: "-25px" }}>
            {item.workedOn.map((item, index) => (
              <div
                className={styles.workedon}
                key={index}
                style={{ backgroundColor: "rgba(245, 245, 245,0.3)" }}
              >
                <h5 style={{ margin: "10px" }}>{item}</h5>
              </div>
            ))}
          </div>
        </div>
        {/* Technologies */}
        <div>
          <p className={styles.technologiesTitle}>Technologies I have used</p>
          <div className={styles.technologies}>
            {item.technologies.map((x,index) => (
              <IconText icon={x.icon} title={x.text} key={index}/>
            ))}
          </div>
        </div>

        <button
          className={styles.linkButton}
          style={{ backgroundColor: color[index] }}
        >
          <a
            href={item.link}
            style={{
              textDecoration: "none",
              color: "whitesmoke",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <LuLink />
            Visit Site
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProjectsItem;
