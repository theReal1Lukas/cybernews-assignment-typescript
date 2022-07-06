import React from "react";
import styles from "../../styles/content.module.css";
import Info from "../../components/Info";
import PasswordGenerator from "../../components/PasswordGenerator";
import Sections from "../../components/sections/Sections";
const Content: React.FC = () => {
  return (
    <div className={styles.main}>
      <Info />
      <PasswordGenerator />
      <Sections />
    </div>
  );
};

export default Content;
