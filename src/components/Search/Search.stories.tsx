import React from 'react';
import Search from './index';

import { FormContainer, InputSearch } from './styles';
import { BsSearch } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { search } from '../../store/modules/covid/actions';

const SearchComponent: React.FC = () => (
  <FormContainer onSubmit={(e) => e.preventDefault()}>
    <InputSearch placeholder="Filtre o Estado que desejas" />
  </FormContainer>
);

export default {
  title: 'Search',
  component: SearchComponent,
};

export { SearchComponent };
