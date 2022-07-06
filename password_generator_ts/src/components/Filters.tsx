import React from "react";
import styles from "../styles/filters.module.css";
interface Props {
  lowFilter: boolean;
  setLowFilter: React.Dispatch<React.SetStateAction<boolean>>;
  highFilter: boolean;
  setHighFilter: React.Dispatch<React.SetStateAction<boolean>>;
  symFilter: boolean;
  setSymFilter: React.Dispatch<React.SetStateAction<boolean>>;
  numFilter: boolean;
  setNumFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

const Filters: React.FC<Props> = ({
  lowFilter,
  setLowFilter,
  highFilter,
  setHighFilter,
  symFilter,
  setSymFilter,
  numFilter,
  setNumFilter,
}) => {
  return (
    <div className={styles.main}>
      <div className={styles.filter}>
        <input
          className={styles.checkbox}
          checked={lowFilter}
          type="checkbox"
          name="only-lower"
          onChange={() => setLowFilter(!lowFilter)}
        />
        <label htmlFor="only-lower">lower case</label>
      </div>
      <div className={styles.filter}>
        <input
          className={styles.checkbox}
          checked={highFilter}
          type="checkbox"
          name="only-upper"
          onChange={() => setHighFilter(!highFilter)}
        />
        <label htmlFor="only-upper">upper case</label>
      </div>
      <div className={styles.filter}>
        <input
          className={styles.checkbox}
          checked={symFilter}
          type="checkbox"
          name="only-special_char"
          onChange={() => setSymFilter(!symFilter)}
        />
        <label htmlFor="only-special_char">special symbols</label>
      </div>
      <div className={styles.filter}>
        <input
          className={styles.checkbox}
          checked={numFilter}
          type="checkbox"
          name="only-digits"
          onChange={() => setNumFilter(!numFilter)}
        />
        <label htmlFor="only-digits">numbers</label>
      </div>
    </div>
  );
};
export default Filters;
