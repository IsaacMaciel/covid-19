import React from 'react';
import { Body, Container, Header, Flag, Title } from './styles';
import Label from '../Label/';

import flags from '../../utils/loaderFlags';

import { FaCheck } from 'react-icons/fa';
import { FiInfo } from 'react-icons/fi';
import { ImWarning } from 'react-icons/im';
import { GiHealthNormal, GiDeathSkull } from 'react-icons/gi';

const CardUF: React.FC = () => {
  const flag = flags.filter((flag) => flag.title === 'Pernambuco')[0];

  return (
    <Container dataCy="uf-list">
      <Header>
        <Flag src={flag.src} />
        <Title>{flag.title}</Title>
      </Header>
      <Body>
        <Label field="Casos" text={'100'}>
          <FaCheck color="#27ae60" />
        </Label>
        <Label field="Suspeitos" text={'100'}>
          <ImWarning color="#d63031" />
        </Label>
        <Label field="Mortos" text={'100'}>
          <GiDeathSkull color="#636e72" />
        </Label>
        <Label field="Atualizado em" text={'24/11/2020 21:26:22'}>
          <FiInfo color="#0984e3" />
        </Label>
      </Body>
    </Container>
  );
};

export default {
  title: 'Card',
  component: CardUF,
};

export { CardUF };
