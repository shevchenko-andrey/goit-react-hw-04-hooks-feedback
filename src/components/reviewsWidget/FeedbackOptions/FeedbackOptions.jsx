import PropTypes from 'prop-types';
import {
  FeedbackList,
  FeedbackItem,
  FeedbackButton,
} from './FeedbackOptions.styled';
function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <FeedbackList>
      {options.map(option => (
        <FeedbackItem key={option}>
          <FeedbackButton
            type="button"
            onClick={onLeaveFeedback}
            name={option}
            key={option}
          >
            {option}
          </FeedbackButton>
        </FeedbackItem>
      ))}
    </FeedbackList>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
