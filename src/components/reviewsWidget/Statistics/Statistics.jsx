import PropTypes from 'prop-types';
import {
  StatisticsList,
  StatisticsItem,
  Description,
  StatisticData,
} from './Statistic.styled';
function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <StatisticsList>
      <StatisticsItem>
        <Description>Good:</Description>
        <StatisticData>{good}</StatisticData>
      </StatisticsItem>
      <StatisticsItem>
        <Description>Neutral:</Description>
        <StatisticData>{neutral}</StatisticData>
      </StatisticsItem>
      <StatisticsItem>
        <Description>Bad:</Description>
        <StatisticData>{bad}</StatisticData>
      </StatisticsItem>
      <StatisticsItem>
        <Description>Total:</Description>
        <StatisticData>{total}</StatisticData>
      </StatisticsItem>
      <StatisticsItem>
        <Description>Positive feedback:</Description>
        <StatisticData>
          {positivePercentage ? positivePercentage : 0}%
        </StatisticData>
      </StatisticsItem>
    </StatisticsList>
  );
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
