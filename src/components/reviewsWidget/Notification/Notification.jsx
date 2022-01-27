import PropTypes from 'prop-types';
import { Stub } from './Notification.styled';
const Notification = ({ message }) => {
  return <Stub>{message}</Stub>;
};

Notification.propTypes = {
  message: PropTypes.string,
};
export default Notification;
