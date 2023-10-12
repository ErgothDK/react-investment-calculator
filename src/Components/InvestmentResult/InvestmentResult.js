import React from "react";
import InvestmentTableHead from "./InvestmentTableHead";
import InvestmentResultRow from "./InvestmentResultRow";
import styles from "./InvestmentResult.module.css";

const InvestmentResult = () => {
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
