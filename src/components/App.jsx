import React, { Component } from 'react';
import { AppContainer, Title } from './App.styled';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { imagesApi } from 'services/images-api';

import { Searchbar } from './Search/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ErrorView } from './ErrorView/ErrorView';

import Loader from './Loader/Loader';

import Button from './Button/Button';

// import PropTypes from 'prop-types'

export class App extends Component {
  state = {
    search: '',
    images: [],
    error: null,
    searchPage: 1,
    loading: false,
    total: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchPage, search } = this.state;

    if (prevState.search !== search || prevState.searchPage !== searchPage) {
      this.fetchImages(search, searchPage);
    }
  }

  fetchImages = async (search, page) => {
    try {
      this.setState({ loading: true });
      const data = await imagesApi(search, page);
      if (data.hits.length === 0) {
        return toast.error(`Nothing was found on the request "${search}"`);
      }
      this.setState(({ images }) => ({
        images: [...images, ...data.hits],
        total: data.totalHits,
      }));
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  };

  handlerLoadMoreBtn = () => {
    this.setState(prevState => ({
      searchPage: prevState.searchPage + 1,
    }));
  };

  onSubmit = search => {
    this.setState({ search, searchPage: 1, images: [] });
  };

  render() {
    const { error, images, loading, total } = this.state;
    const totalPage = total / images.length;
    return (
      <AppContainer>
        <Searchbar onSubmit={this.onSubmit} />

        {images.length === 0 && !error && !loading && <Title>ready to search</Title>}

        {error && <ErrorView />}

        {images.length !== 0 && <ImageGallery images={images} />}

        {!loading && totalPage > 1 && images.length !== 0 && (
          <Button onBtnClick={this.handlerLoadMoreBtn} />
        )}

        {loading && <Loader />}
        <ToastContainer />
      </AppContainer>
    );
  }
}
