import React from 'react';
import { FormContainer, InputSearch, ButtonSearch } from './styles';
import { BsSearch } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { search } from '../../store/modules/covid/actions';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <FormContainer onSubmit={(e) => e.preventDefault()}>
      <InputSearch
        onChange={(e) => dispatch(search(e.target.value))}
        placeholder="Filtre o Estado que desejas"
      />

      <ButtonSearch type="submit">
        <BsSearch color={'#fff'} />
      </ButtonSearch>
    </FormContainer>
  );
};

export default Search;
