import React from 'react';

import { Container, Text, Img } from './styles';

import covid19 from '../../assets/covid-19.png';

const Header: React.FC = () => (
  <Container>
    <Img src={covid19}></Img>
    <Text>Covid-19 Brasil</Text>
  </Container>
);

export default Header;
