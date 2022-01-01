import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackOptionsBtn } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  console.log('options:', options);
  return (
    <FeedbackOptionsBtn>
      {options.map(data => (
        <button
          type="button"
          key={data}
          value={data}
          onClick={() => onLeaveFeedback(data)}
        >
          {data}
        </button>
      ))}
    </FeedbackOptionsBtn>
  );
};
// =========================================================================
// const FeedbackOptions = ({ onGood, onNeutral, onBad }) => {
//   // console.dir(current.target);
//   return (
//     <FeedbackOptionsBtn>
//       <button type="button" onClick={onGood}>
//         Good
//       </button>
//       <button type="button" onClick={onNeutral}>
//         Neutral
//       </button>
//       <button type="button" onClick={onBad}>
//         Bad
//       </button>
//     </FeedbackOptionsBtn>
//   );
// };
// =========================================================================
FeedbackOptions.propTypes = {
  onGood: PropTypes.func.isRequired,
  onNeutral: PropTypes.func.isRequired,
  onBad: PropTypes.func.isRequired,
};
export default FeedbackOptions;
