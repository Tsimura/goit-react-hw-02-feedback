import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions ';
import Statistics from './Statistics';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    visible: false,
  };
  clickBtnGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };
  clickBtnNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };
  clickBtnBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () => {
    return Math.round(
      (this.state.good * 100) /
        (this.state.good + this.state.neutral + this.state.bad),
    );
  };
  show = () => {
    this.setState({ visible: true });
  };

  render() {
    return (
      <div className="Feedback">
        <h2 className="Feedback__title">Please leave feedback</h2>
        <FeedbackOptions
          onGood={this.clickBtnGood}
          onNeutral={this.clickBtnNeutral}
          onBad={this.clickBtnBad}
        />
        <Statistics
          valueGood={this.state.good}
          valueNeutral={this.state.neutral}
          valueBad={this.state.bad}
          total={this.countTotalFeedback()}
          positiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}
export default Feedback;
