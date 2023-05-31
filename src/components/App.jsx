import React, { Component } from 'react';

import { Searchbar } from './Search/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

import Loader from './Loader/Loader';

export class App extends Component {
  state = {
    search: '',
    loading: false,
  };

  onSubmit = data => {
    this.setState({ search: data });
  };

  onLoading = data => {
    console.log(data);
    this.setState({ loading: data });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery search={this.state.search} onLoading={this.onLoading} />
        {this.state.loading && <Loader />}
      </>
    );
  }
}
