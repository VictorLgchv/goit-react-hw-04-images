import { useState, useEffect } from 'react';
import { AppContainer, Title } from './App.styled';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { imagesApi } from 'services/images-api';

import { Searchbar } from './Search/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ErrorView } from './ErrorView/ErrorView';

import Loader from './Loader/Loader';

import Button from './Button/Button';

export function App() {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [searchPage, setSearchPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (search === '') {
      return;
    }
    fetchImages(search, searchPage);
  }, [search, searchPage]);

  const fetchImages = async (search, page) => {
    try {
      setLoading(true);
      const data = await imagesApi(search, page);
      if (data.hits.length === 0) {
        return toast.error(`Nothing was found on the request "${search}"`);
      }
      setImages(prevState => [...prevState, ...data.hits]);
      setTotal(data.totalHits);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handlerLoadMoreBtn = () => {
    setSearchPage(prevState => prevState + 1);
  };

  const onSubmit = search => {
    setSearch(search);
    setSearchPage(1);
    setImages([]);
  };

  const totalPage = total / images.length;
  return (
    <AppContainer>
      <Searchbar onSubmit={onSubmit} />

      {images.length === 0 && !error && !loading && (
        <Title>ready to search</Title>
      )}

      {error && <ErrorView />}

      {images.length !== 0 && <ImageGallery images={images} />}

      {!loading && totalPage > 1 && images.length !== 0 && (
        <Button onBtnClick={handlerLoadMoreBtn} />
      )}

      {loading && <Loader />}
      <ToastContainer />
    </AppContainer>
  );
}