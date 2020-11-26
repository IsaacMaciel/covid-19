import React from 'react';
import { Body, Container, Header, Flag, Title } from './styles';

import Label from '../Label/';

import { formatDataCountry } from '../../utils/dataFormmat';

import { FaCheck } from 'react-icons/fa';
import { FiInfo } from 'react-icons/fi';
import { ImWarning } from 'react-icons/im';
import { GiHealthNormal, GiDeathSkull } from 'react-icons/gi';

import { Country } from '../../store/modules/covid/types';
import { useDispatch } from 'react-redux';
import { getCountryInfo } from '../../store/modules/covid/actions';

import percentInfo from '../../utils/percentInfo';

export interface IData {
  data: Country;
}

export interface IFlag {
  flag: {
    title: string;
    src: string;
  };
}

export type Props = IData & IFlag;

const Card: React.FC<Props> = ({ data, flag }) => {
  const dispatch = useDispatch();
  const dataFormmated = formatDataCountry(data);
  const percent = percentInfo(data);
  return (
    <Container onClick={(e) => dispatch(getCountryInfo('brazil'))}>
      <Header>
        <Flag src={flag.src} />
        <Title>{flag.title}</Title>
      </Header>
      <Body>
        <Label field="Confirmados" text={dataFormmated.confirmed}>
          <FaCheck color="#27ae60" />
        </Label>
        <Label
          field="Ativos"
          text={`${dataFormmated.cases} ( ${percent.cases} % )`}
        >
          <ImWarning color="#d63031" />
        </Label>
        <Label
          field="Recuperados"
          text={`${dataFormmated.recovered} ( ${percent.recovered} % )`}
        >
          <GiHealthNormal color="#27ae60" />
        </Label>
        <Label
          field="Mortos"
          text={`${dataFormmated.deaths} ( ${percent.death} % )`}
        >
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
