import React from 'react';
import PropTypes from 'prop-types';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <p>Statistics</p>
    <p>👍: {good}</p>
    <p>😐: {neutral}</p>
    <p>👎: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive feedback: {positivePercentage} %</p>
  </div>
);
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
