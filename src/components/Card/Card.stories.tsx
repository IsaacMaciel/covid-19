import React from 'react';

import flags from '../../utils/loaderFlags';

import Label from '../Label/';
import { Body, Container, Header, Flag, Title } from './styles';

import { FaCheck } from 'react-icons/fa';
import { FiInfo } from 'react-icons/fi';
import { ImWarning } from 'react-icons/im';
import { GiHealthNormal, GiDeathSkull } from 'react-icons/gi';

const CardCountry: React.FC = () => {
  const br = flags.filter((flag) => flag.title === 'Brasil')[0];

  return (
    <Container onClick={(e) => e.preventDefault()}>
      <Header>
        <Flag src={br.src} />
        <Title>{br.title}</Title>
      </Header>
      <Body>
        <Label field="Confirmados" text={'100'}>
          <FaCheck color="#27ae60" />
        </Label>
        <Label field="Ativos" text={'100'}>
          <ImWarning color="#d63031" />
        </Label>
        <Label field="Recuperados" text={'100'}>
          <GiHealthNormal color="#27ae60" />
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
  component: CardCountry,
  subComponents: Label,
};

export { CardCountry };
