import React, { useState } from "react";
import Header from "./UI/Header";
import InvestmentForm from "./Components/InvestmentForm/InvestmentForm";
import InvestmentResult from "./Components/InvestmentResult/InvestmentResult";

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = +userInput["current-savings"];
    let totalInterest = 0;
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      const year = i + 1;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInterest += yearlyInterest;
      const investedCapital =
        +userInput["current-savings"] + yearlyContribution * year;

      yearlyData.push({
        year: year,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        totalInterest: totalInterest,
        investedCapital: investedCapital,
      });
    }
  }

  return (
    <div>
      <Header />
      <InvestmentForm onCalculate={calculateHandler} />
      <InvestmentResult yearlyData={yearlyData} userInput={userInput} />
    </div>
  );
}

export default App;
