import React, { Component } from 'react';

import { Header, Form, Btn, ButtonSpan, Input } from './Searchbar.styled';

import PropTypes from 'prop-types'

export class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value.toLowerCase() });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    if (this.state.search.trim() === '') {
      alert('Чекаємо від вас текст ;)');
      return;
    }

    this.props.onSubmit(this.state.search);
    this.reset();
  };

  reset = () => {
    this.setState({ search: '' });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Btn type="submit">
            <ButtonSpan>Search</ButtonSpan>
          </Btn>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="search"
            value={this.state.search}
            onChange={this.handleChange}
          />
        </Form>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}