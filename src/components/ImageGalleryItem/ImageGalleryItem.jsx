import { Modal } from 'components/Modal/Modal';
import React, { Component } from 'react';

import { Item, Img, Btn, BtnSpan } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    const { webImg, largeImg, tags } = this.props;
    return (
      <Item>
        <Img src={webImg} alt={tags} onClick={this.toggleModal} />
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImg} alt={tags} />
            <Btn type="button" onClick={this.toggleModal}>
              <BtnSpan>close</BtnSpan>
            </Btn>
          </Modal>
        )}
      </Item>
    );
  }
}

ImageGalleryItem.propTypes = {
  webImg: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
