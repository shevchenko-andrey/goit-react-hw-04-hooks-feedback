import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/';
import Statistics from './Statistics/';
import Section from '../Section/';
import Notification from './Notification/';
const ReviewsWidget = () => {
  const [good, setGood] = useState(0);

  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ['good', 'neutral', 'bad'];

  const onLeaveFeedback = e => {
    const key = e.target.name;
    switch (key) {
      case 'good':
        setGood(prevValue => prevValue + 1);
        break;
      case 'neutral':
        setNeutral(prevValue => prevValue + 1);
        break;
      case 'bad':
        setBad(prevValue => prevValue + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = (feedbackCount, total) => {
    return Math.floor((feedbackCount * 100) / total);
  };

  const totalStats = countTotalFeedback(good, neutral, bad);
  const positivePercentage = countPositiveFeedbackPercentage(good, totalStats);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
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
};

export default ReviewsWidget;
