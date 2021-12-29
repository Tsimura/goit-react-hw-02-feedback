import React, { Component } from 'react';

class Feedback extends Component {
  render() {
    return (
      <div className="Feedback">
        <h2 className="Feedback__title">Please leave feedback</h2>
        <div className="Feedback__buttonField">
          <button type="button">Good</button>
          <button type="button">Neutral</button>
          <button type="button">Bad</button>
        </div>
        <div>
          <p>Statistics</p>
          <p>Good: 0</p>
          <p>Neutral: 0</p>
          <p>Bad: 0</p>
        </div>
      </div>
    );
  }
}

export default Feedback;
