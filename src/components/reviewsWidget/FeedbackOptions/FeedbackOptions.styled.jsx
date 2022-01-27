import styled from 'styled-components';

export const FeedbackList = styled.ul`
  display: flex;
  justify-content: center;
`;
export const FeedbackItem = styled.li`
  :not(:last-child) {
    margin-right: 10px;
  }
`;
export const FeedbackButton = styled.button`
  background-color: ${props => (props.name !== 'bad' ? '#4caf50' : '#707070')};
  background-color: ${props => props.name === 'neutral' && '#c9e64c'};
  color: white;
  padding: 15px 32px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
`;
