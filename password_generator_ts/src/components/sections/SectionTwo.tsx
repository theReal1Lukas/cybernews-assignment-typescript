import React from "react";
import styles from "../../styles/sections.module.css";
import psw_strength_logo from "../../assets/psw-strength-logo.png";

const SectionTwo: React.FC = () => {
  return (
    <div className={styles.section2}>
      <div className={styles.text2}>
        <h1> How does our password generator tool work?</h1>
        <p>
          To create a truly unique character combination, this online password
          generator tool goes through random sequences of 26 uppercase letters,
          26 lowercase letters, 10 numeric digits, and 32 special symbols. The
          result is a unique 12-character sequence. This number of characters
          makes your future password downright unbreakable, taking 1.4 billion
          years for a brute-force attack to crack it.
        </p>
        <p>
          This free password generator is compatible with Windows, Linux, and
          Mac operating systems, as well as with Android and iOS devices.
        </p>
      </div>
      <div className={styles.logo2}>
        <img src={psw_strength_logo} alt="password strength logo" />
      </div>
    </div>
  );
};

export default SectionTwo;
