import styled from 'styled-components';

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: center;
  width: 600px;
  margin: 0px auto;
`;
export const StatisticsItem = styled.li`
  border-right: 2px solid #6de072;
  padding: 10px;
  :nth-child(1) {
    border-left: 2px solid #6de072;
  }
`;
export const Description = styled.span`
  display: block;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const StatisticData = styled.span`
  display: block;
`;
