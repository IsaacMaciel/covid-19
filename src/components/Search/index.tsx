import React from 'react';
import { FormContainer, InputSearch } from './styles';
import { useDispatch } from 'react-redux';
import { search } from '../../store/modules/covid/actions';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <FormContainer onSubmit={(e) => e.preventDefault()}>
      <InputSearch
        onChange={(e) => dispatch(search(e.target.value))}
        placeholder="Pesquisar"
      />
    </FormContainer>
  );
};

export default Search;
