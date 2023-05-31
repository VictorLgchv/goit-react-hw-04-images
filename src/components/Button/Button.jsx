import PropTypes from 'prop-types';

import { ButtonLoad } from './Button.styled';

export default function Button({ onBtnClick }) {
  return (
    <ButtonLoad type="button" onClick={onBtnClick}>
      load more
    </ButtonLoad>
  );
}

Button.propTypes = {
  onBtnClick: PropTypes.func,
};
