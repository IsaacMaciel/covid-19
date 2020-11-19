import React from 'react';

import { Container } from './styles';

import Header from '../components/Header';
import Content from '../components/Content';

const Index: React.FC = () => (
  <Container>
    <Header />
    <Content />
  </Container>
);

export default Index;
