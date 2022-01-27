import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from '../Section/Section';
import Notification from './Notification/Notification';
class ReviewsWidget extends Component {
  static defaultProps = {
    state: { good: 0, neutral: 0, bad: 0 },
  };
  state = this.props.state;

  options = Object.keys(this.state);

  onLeaveFeedback = e => {
    const key = e.target.name;
    this.setState(prevState => {
      return { [key]: (prevState[key] += 1) };
    });
  };
  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = (feedbackCount, total) => {
    return Math.floor((feedbackCount * 100) / total);
  };
  render() {
    const { good, neutral, bad } = this.state;
    const totalStats = this.countTotalFeedback(good, neutral, bad);
    const positivePercentage = this.countPositiveFeedbackPercentage(
      good,
      totalStats
    );

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {totalStats > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalStats}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </>
    );
  }
}
export default ReviewsWidget;
