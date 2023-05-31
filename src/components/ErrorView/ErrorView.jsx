import errorImage from './sign-1719892_1920.png';
import {Error, Img, Text} from './ErrorView.styled'

import PropTypes from 'prop-types'

export const ErrorView = ({ message }) => {
  return (
    <Error role="alert">
      <Img src={errorImage} width="250" alt="error" />
      <Text> {message} </Text>
    </Error>
  );
};

ErrorView.propTypes = {
  message: PropTypes.string.isRequired,
}