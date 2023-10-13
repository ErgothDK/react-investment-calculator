import React, { useState } from "react";
import styles from "./InvestmentForm.module.css";

const InvestmentForm = (props) => {
  const [userInput, setUserInput] = useState({
    "current-savings": "",
    "yearly-contribution": "",
    "expected-return": "",
    duration: "",
  });

  function resetClickHandler() {
    setUserInput({
      "current-savings": "",
      "yearly-contribution": "",
      "expected-return": "",
      duration: "",
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    //props.onCalculate(onCalculate);
    console.log("submit clicked");
  }

  function inputChangeHandler(event) {
    setUserInput((previousState) => {
      return {
        ...previousState,
        [event.target.id]: event.target.value,
      };
    });
  }

  return (
    <form
      className={styles.form}
      onSubmit={submitHandler}
      //onCalculate={onCalculate}
    >
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={inputChangeHandler}
            value={userInput["current-savings"]}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={inputChangeHandler}
            value={userInput["yearly-contribution"]}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={inputChangeHandler}
            value={userInput["expected-return"]}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={inputChangeHandler}
            value={userInput.duration}
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          type="reset"
          className={styles.buttonAlt}
          onClick={resetClickHandler}
        >
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestmentForm;
