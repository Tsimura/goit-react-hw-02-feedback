import React from 'react';
const Statistics = ({
  valueGood,
  valueNeutral,
  valueBad,
  total,
  positiveFeedbackPercentage,
}) => (
  <div>
    <p>Statistics</p>
    <p>👍: {valueGood}</p>
    <p>😐: {valueNeutral}</p>
    <p>👎: {valueBad}</p> <p>Total: {total}</p>
    <p>Positive feedback: {positiveFeedbackPercentage} %</p>
  </div>
);
export default Statistics;
