import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Overlay, ModalBox } from './Modal.styled';

import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ onClose, children }) {

  useEffect(() => {
    const handleModalClose = evt => {
      if (evt.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleModalClose);

    return () => {
      window.removeEventListener('keydown', handleModalClose);
    }
  },[onClose])

  

  const handleBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalBox>{children}</ModalBox>
    </Overlay>,
    modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.object,
};
