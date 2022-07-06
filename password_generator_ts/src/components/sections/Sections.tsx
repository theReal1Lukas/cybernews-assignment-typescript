import React from "react";
import styles from "../../styles/sections.module.css";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";

const Sections: React.FC = () => {
  return (
    <div className={styles.main}>
      <SectionOne />
      <SectionTwo />
    </div>
  );
};

export default Sections;
