import React from "react";
import styles from "../styles/info.module.css";
const URL: string =
  "https://cybernews.com/terms-conditions/#h-affiliate-links-advertising-disclosure";

const Info: React.FC = () => {
  return (
    <p className={styles.text}>
      Our readers help us create quality content. If you purchase via links on
      our site, we may receive affiliate commissions.{" "}
      <span>
        <a className={styles.link} href={URL} target="_blank" rel="noreferrer">
          Learn more
        </a>
      </span>
    </p>
  );
};

export default Info;
