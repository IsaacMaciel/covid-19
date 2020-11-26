import React from 'react';

import { FormContainer, InputSearch } from './styles';

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
