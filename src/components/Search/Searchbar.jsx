import { useState } from 'react';

import { Header, Form, Btn, ButtonSpan, Input } from './Searchbar.styled';

import PropTypes from 'prop-types';

export function Searchbar({ onSubmit }) {
  const [search, setSearch] = useState('');

  const handleChange = evt => {
    const { value } = evt.currentTarget;
    setSearch(value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (search.trim() === '') {
      alert('Чекаємо від вас текст ;)');
      return;
    }

    onSubmit(search);
    reset();
  };

  const reset = () => {
    setSearch('');
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <Btn type="submit">
          <ButtonSpan>Search</ButtonSpan>
        </Btn>

        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
          value={search}
          onChange={handleChange}
        />
      </Form>
    </Header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
