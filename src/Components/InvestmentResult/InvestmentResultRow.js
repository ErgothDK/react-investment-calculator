import React from "react";

const InvestmentResultRow = (props) => {
  const formattedCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <tr>
      <td>{props.year}</td>
      <td>{formattedCurrency.format(props.savingsEndOfYear)}</td>
      <td>{formattedCurrency.format(props.yearlyInterest)}</td>
      <td>{formattedCurrency.format(props.totalInterest)}</td>
      <td>{formattedCurrency.format(props.investedCapital)}</td>
    </tr>
  );
};

export default InvestmentResultRow;
