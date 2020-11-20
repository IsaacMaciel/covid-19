import React from 'react';
import { FormContainer, InputSearch, ButtonSearch } from './styles';
import { BsSearch } from 'react-icons/bs';

const Search: React.FC = () => {
  return (
    <FormContainer>
      <InputSearch placeholder="Filtre o Estado que desejas" />

      <ButtonSearch type="submit">
        <BsSearch color={'#fff'} />
      </ButtonSearch>
    </FormContainer>
  );
};

export default Search;
