import React, { useState, useEffect } from 'react';
import { Body, Container, Header, Img, Title } from './styles';

import br from '../../assets/flags/BR.png';

import Label from '../Label/';

import { FaCheck } from 'react-icons/fa';
import { FiInfo } from 'react-icons/fi';
import { ImWarning } from 'react-icons/im';
import { GiHealthNormal, GiDeathSkull } from 'react-icons/gi';

interface ICard {
  data: {
    cases: number;
    confirmed: number;
    country: string;
    deaths: number;
    recovered: number;
    updated_at: string;
  };
  flag: {
    title: string;
    src: any;
  };
}

const Card: React.FC<ICard> = ({ data, flag }) => {
  return (
    <Container>
      <Header>
        <Img src={flag.src}></Img>
        <Title>{flag.title}</Title>
      </Header>
      <Body>
        <Label field="Confirmados" text={String(data.confirmed)}>
          <FaCheck color="#27ae60" />
        </Label>
        <Label field="Ativos" text={String(data.cases)}>
          <ImWarning color="#d63031" />
        </Label>
        <Label field="Recuperados" text={String(data.recovered)}>
          <GiHealthNormal color="#27ae60" />
        </Label>
        <Label field="Mortos" text={String(data.deaths)}>
          <GiDeathSkull color="#636e72" />
        </Label>
        <Label field="Atualizado em" text={data.updated_at}>
          <FiInfo color="#0984e3" />
        </Label>
      </Body>
    </Container>
  );
};

export default Card;
