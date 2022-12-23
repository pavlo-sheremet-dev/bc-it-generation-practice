import { useState } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [text, setText] = useState('');
  const handleInput = e => {
    setText(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!text) return;
    onSubmit({ text });
    setText('');
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
        value={text}
        onChange={handleInput}
      />
    </SearchFormStyled>
  );
};
