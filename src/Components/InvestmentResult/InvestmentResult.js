import React, { useState } from "react";
import InvestmentTableHead from "./InvestmentTableHead";
import InvestmentResultRow from "./InvestmentResultRow";
import styles from "./InvestmentResult.module.css";

const InvestmentResult = () => {
  const [result, setResult] = useState(0);

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // do something with yearlyData ...

    content = (
      <table className={styles.result}>
        <InvestmentTableHead />
        <tbody>
          <InvestmentResultRow />
          <InvestmentResultRow />
          <InvestmentResultRow />
        </tbody>
      </table>
    );
  };

  let content = <p className={styles.notFound}>No hay resultados</p>;

  return content;
};

export default InvestmentResult;
