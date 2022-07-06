import React from "react";
import styles from "../../styles/navigation.module.css";
import cyber from "../../assets/cybernews-logo.png";
const NavigationBar: React.FC = () => {
  return (
    <div className={styles.nav}>
      <img className={styles.nav_logo} src={cyber} alt="cybernews-logo" />
    </div>
  );
};

export default NavigationBar;
