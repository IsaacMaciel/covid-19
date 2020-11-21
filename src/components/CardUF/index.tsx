import React from 'react';
import { Body, Container, Header, Flag, Title } from './styles';

import Label from '../Label/';

import { formatDataUF } from '../../utils/dataFormmat';

import { FaCheck } from 'react-icons/fa';
import { FiInfo } from 'react-icons/fi';
import { ImWarning } from 'react-icons/im';
import { GiHealthNormal, GiDeathSkull } from 'react-icons/gi';

import { UF } from '../../store/modules/covid/types';

export interface IData {
  data: UF;
}

export interface IFlag {
  flag: {
    title: string;
    src: string;
  };
}

type Props = IData & IFlag;

const CardUF: React.FC<Props> = ({ data, flag }) => {
  // console.log('CardUF');

  const dataFormmated = formatDataUF(data);
  return (
    <Container>
      <Header>
        <Flag src={flag.src} />
        <Title>{flag.title}</Title>
      </Header>
      <Body>
        <Label field="Casos" text={dataFormmated.cases}>
          <FaCheck color="#27ae60" />
        </Label>
        <Label field="Suspeitos" text={dataFormmated.suspects}>
          <ImWarning color="#d63031" />
        </Label>
        <Label field="Mortos" text={dataFormmated.deaths}>
          <GiDeathSkull color="#636e72" />
        </Label>
        <Label field="Atualizado em" text={dataFormmated.datetime}>
          <FiInfo color="#0984e3" />
        </Label>
      </Body>
    </Container>
  );
};

export default CardUF;
