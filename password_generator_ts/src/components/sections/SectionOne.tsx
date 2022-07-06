import React from "react";
import styles from "../../styles/sections.module.css";
import laptop_logo from "../../assets/secure-laptop-logo.png";

const SectionOne: React.FC = () => {
  return (
    <div className={styles.section1}>
      <div className={styles.logo}>
        <img src={laptop_logo} alt="secure laptop logo" />
      </div>
      <div className={styles.text}>
        <h1> What is a password generator?</h1>
        <p>
          A password generator is a tool that automatically generates strong,
          secure passwords. With its help, you don’t need to come up with your
          own passwords ever again.
        </p>
        <p>
          A single mouse click will generate you a sequence of random symbols.
          Copy and use it as a password for your device, email, social media
          account, or anything else that requires restricted access.
        </p>
        <p>
          Also, don’t use the same password for more than one account. Each time
          you need to sign up, create a new password using this free password
          generator. In this way, your data will be safer than ever before.
        </p>
      </div>
    </div>
  );
};

export default SectionOne;
