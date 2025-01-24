import React, { useEffect, useState } from "react";
import { calculateInvestmentResults, formatter } from "../scripts/investment";

const ResultsTable = ({ userInput }) => {
  const calculations = calculateInvestmentResults(userInput);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest [Year]</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {calculations.map((item, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{item.year}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(item.annualInvestment)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTable;
