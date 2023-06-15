import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';

import { Item, Img } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export function ImageGalleryItem({ webImg, largeImg, tags }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
      };

  return (
    <Item>
      <Img src={webImg} alt={tags} onClick={toggleModal} />
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={largeImg} alt={tags} />
        </Modal>
      )}
    </Item>
  );
}

ImageGalleryItem.propTypes = {
  webImg: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
