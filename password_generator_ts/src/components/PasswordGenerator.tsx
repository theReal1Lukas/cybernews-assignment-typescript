import { useEffect, useState } from "react";
import styles from "../styles/passwordGenerator.module.css";
import arrow from "../assets/refresh-arrow-logo.png";
import Filters from "./Filters";

interface PSW {
  upper: string;
  lower: string;
  numbers: string;
  characters: string;
}

const PSW_CHAR: PSW = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  characters: "\"`!#$%&'()*+,-./:;<=>?@[]^_{|}~\\",
};

const PasswordGenerator: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [upperCase, setUpperCase] = useState<string>(PSW_CHAR.upper);
  const [lowerCase, setLowerCase] = useState<string>(PSW_CHAR.lower);
  const [digits, setDigits] = useState<string>(PSW_CHAR.numbers);
  const [symbols, setSymbols] = useState<string>(PSW_CHAR.characters);

  const [lowFilter, setLowFilter] = useState<boolean>(true);
  const [highFilter, setHighFilter] = useState<boolean>(true);
  const [numFilter, setNumFilter] = useState<boolean>(true);
  const [symFilter, setSymFilter] = useState<boolean>(true);

  //check if filters active
  useEffect(() => {
    if (!lowFilter) {
      setLowerCase("");
    } else {
      setLowerCase(PSW_CHAR.lower);
    }
    if (!highFilter) {
      setUpperCase("");
    } else {
      setUpperCase(PSW_CHAR.upper);
    }
    if (!numFilter) {
      setDigits("");
    } else {
      setDigits(PSW_CHAR.numbers);
    }
    if (!symFilter) {
      setSymbols("");
    } else {
      setSymbols(PSW_CHAR.characters);
    }
  }, [lowFilter, highFilter, numFilter, symFilter]);
  const handleGenerator = () => {
    const str: string = upperCase + symbols + lowerCase + digits;
    let pass: string = "";

    for (let i: number = 1; i <= 20; i++) {
      const rndm: number = Math.floor(Math.random() * str.length) + 1;
      pass += str.charAt(rndm);
    }
    setPassword(pass);
  };

  window.onload = () => handleGenerator();

  const handleCopyPassword = (input: string) => {
    navigator.clipboard
      .writeText(input)
      .then(() => console.log("Password copied sucessfully"));
  };

  const setInputValue = () => {
    if (!lowFilter && !highFilter && !numFilter && !symFilter) {
      return "Please select at least one filter";
    } else {
      return password;
    }
  };

  return (
    <div className={styles.password_generator}>
      <div className={styles.password_generator_texts}>
        <h1 className={styles.text}>Generate strong passwords</h1>
        <p className={styles.text}>
          Upgrade the security of your online accounts.
        </p>
        <p className={styles.text}>
          Create strong passwords that are completely random and impossible to
          guess.
        </p>
      </div>

      <div className={styles.input_container}>
        <div className={styles.input}>
          <input
            className={styles.password_input}
            defaultValue={setInputValue()}
          />

          <button
            className={styles["input_btn--generate"]}
            onClick={handleGenerator}
          >
            <img className={styles.arrow_img} src={arrow} alt="arrow logo" />
          </button>
        </div>
        <button
          className={styles["input_btn--copy"]}
          onClick={() => handleCopyPassword(password)}
        >
          Copy Password
        </button>
      </div>

      <Filters
        lowFilter={lowFilter}
        setLowFilter={setLowFilter}
        highFilter={highFilter}
        setHighFilter={setHighFilter}
        numFilter={numFilter}
        setNumFilter={setNumFilter}
        symFilter={symFilter}
        setSymFilter={setSymFilter}
      />
    </div>
  );
};
export default PasswordGenerator;
