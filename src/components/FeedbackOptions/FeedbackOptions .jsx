import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackOptionsBtn } from './FeedbackOptions.styled';
const FeedbackOptions = ({ onGood, onNeutral, onBad }) => (
  <FeedbackOptionsBtn>
    <button type="button" onClick={onGood}>
      Good
    </button>
    <button type="button" onClick={onNeutral}>
      Neutral
    </button>
    <button type="button" onClick={onBad}>
      Bad
    </button>
  </FeedbackOptionsBtn>
);
FeedbackOptions.propTypes = {
  onGood: PropTypes.func.isRequired,
  onNeutral: PropTypes.func.isRequired,
  onBad: PropTypes.func.isRequired,
};
export default FeedbackOptions;
