import React from "react";
import InvestmentTableHead from "./InvestmentTableHead";
import InvestmentResultRow from "./InvestmentResultRow";
import styles from "./InvestmentResult.module.css";

const InvestmentResult = (props) => {
  let content = <p className={styles.notFound}>No hay resultados</p>;

  if (props.yearlyData.length > 0) {
    content = (
      <table className={styles.result}>
        <InvestmentTableHead />
        <tbody>
          {props.yearlyData.map((row) => (
            <InvestmentResultRow key={row.year} {...row} />
          ))}
        </tbody>
      </table>
    );
  }

  return content;
};

export default InvestmentResult;
