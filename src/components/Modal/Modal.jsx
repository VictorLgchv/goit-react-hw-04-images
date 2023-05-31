import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import { Overlay, ModalBox } from './Modal.styled';

import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleModalClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleModalClose);
  }

  handleModalClose = evt => {
    const { onClose } = this.props;
    if (evt.code === 'Escape') {
      onClose();
    }
  };

  handleBackdropClick = evt => {
    const { onClose } = this.props;
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  render() {
    const { children } = this.props;
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalBox>{children}</ModalBox>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.array
};
