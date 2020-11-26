import React from 'react';
import { Container, Body, Text, Flag } from './styles';

import { useDispatch } from 'react-redux';
import { getUFInfo } from '../../store/modules/covid/actions';

export interface Flag {
  title: string;
  src: string;
  apiParams: string;
}

const List: React.FC<Flag> = ({ title, src, apiParams }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(getUFInfo(apiParams));
  };
  return (
    <Container onClick={(e) => handleClick()}>
      <Body>
        <Flag src={src} />
        <Text>{title}</Text>
      </Body>
    </Container>
  );
};

export default List;
