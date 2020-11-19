import React, { useState, useEffect } from 'react';
import { Body, Container, Header, Img, Title } from './styles';

import br from '../../assets/flags/BR.png';

import Label from '../Label/';

import formatData from '../../utils/dataFormmat';

import { FaCheck } from 'react-icons/fa';
import { FiInfo } from 'react-icons/fi';
import { ImWarning } from 'react-icons/im';
import { GiHealthNormal, GiDeathSkull } from 'react-icons/gi';

import { Country } from '../../store/modules/covid/types';

export interface IData {
  data: Country;
}

export interface IFlag {
  flag: {
    title: string;
    src: any;
  };
}

type Props = IData & IFlag;

const Card: React.FC<Props> = ({ data, flag }) => {
  const dataFormmated = formatData(data);
  return (
    <Container>
      <Header>
        <Img src={flag.src}></Img>
        <Title>{flag.title}</Title>
      </Header>
      <Body>
        <Label field="Confirmados" text={dataFormmated.confirmed}>
          <FaCheck color="#27ae60" />
        </Label>
        <Label field="Ativos" text={dataFormmated.cases}>
          <ImWarning color="#d63031" />
        </Label>
        <Label field="Recuperados" text={dataFormmated.recovered}>
          <GiHealthNormal color="#27ae60" />
        </Label>
        <Label field="Mortos" text={dataFormmated.deaths}>
          <GiDeathSkull color="#636e72" />
        </Label>
        <Label field="Atualizado em" text={dataFormmated.updated_at}>
          <FiInfo color="#0984e3" />
        </Label>
      </Body>
    </Container>
  );
};

export default Card;
