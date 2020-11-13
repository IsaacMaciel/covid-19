import React from 'react';
import { Body, Container, Header, Img, Title } from './styles';

import flags from '../../utils/loaderFlags';
import br from '../../assets/flags/BR.png';

import Label from '../Label/';

import { FaCheck } from 'react-icons/fa';
import { FiInfo } from 'react-icons/fi';
import { ImWarning } from 'react-icons/im';
import { GiHealthNormal, GiDeathSkull } from 'react-icons/gi';

const Card: React.FC = () => {
  console.log(flags);
  return (
    <Container>
      <Header>
        <Img src={br}></Img>
        <Title>Brasil</Title>
      </Header>
      <Body>
        <Label field="Confirmados" text="5747660">
          <FaCheck color="#27ae60" />
        </Label>
        <Label field="Ativos" text="361355">
          <ImWarning color="#d63031" />
        </Label>
        <Label field="Recuperados" text="5222937">
          <GiHealthNormal color="#27ae60" />
        </Label>
        <Label field="Mortos" text="163368">
          <GiDeathSkull color="#636e72" />
        </Label>
        <Label field="Atualizado em" text="12/11/2020">
          <FiInfo color="#0984e3" />
        </Label>
      </Body>
    </Container>
  );
};

export default Card;
