import React, { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions ';
import Notification from '../Notification/Notification';
import Statistics from '../Statistics/Statistics';
import { FeedbackWrapper } from './Feedback.styled';
class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // =========================================================================
  // clickBtnGood = e => {
  //   this.setState(prevState => ({ good: prevState.good + 1 }));
  // };
  // clickBtnNeutral = () => {
  //   this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  // };
  // clickBtnBad = () => {
  //   this.setState(prevState => ({ bad: prevState.bad + 1 }));
  // };
  // =========================================================================
  clickBtn = event => {
    this.setState(prevState => ({
      [event]: prevState[event] + 1,
    }));
  };
  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;
  countPositiveFeedbackPercentage = () => {
    return Math.round(
      (this.state.good * 100) /
        (this.state.good + this.state.neutral + this.state.bad),
    );
  };
  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;
    const totalValue = this.countTotalFeedback();
    return (
      <FeedbackWrapper>
        <h2>Please leave feedback</h2>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.clickBtn}
        //    onGood={this.clickBtnGood}
        //    onNeutral={this.clickBtnNeutral}
        //    onBad={this.clickBtnBad}
        />
        {totalValue ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification />
        )}
      </FeedbackWrapper>
    );
  }
}

export default Feedback;
