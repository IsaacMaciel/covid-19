import React from 'react';
import Header from './index';
import GlobalStyles from '../../GlobalStyles';

const HeaderComponent: React.FC = () => (
  <>
    <Header />

    <GlobalStyles />
  </>
);

export default {
  title: 'Header',
  component: HeaderComponent,
};

export { HeaderComponent };
