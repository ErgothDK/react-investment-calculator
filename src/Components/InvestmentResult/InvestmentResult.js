import React, { useState } from "react";
import InvestmentTableHead from "./InvestmentTableHead";
import InvestmentResultRow from "./InvestmentResultRow";
import styles from "./InvestmentResult.module.css";

const InvestmentResult = () => {
  const [result, setResult] = useState(0);

  return (
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

export default InvestmentResult;
