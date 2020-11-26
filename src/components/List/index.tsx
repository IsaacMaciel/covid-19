import React, { useState } from 'react';
import { Container, Body, Text, Flag } from './styles';

import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../store/createStore';
import { getUFInfo } from '../../store/modules/covid/actions';

export interface Flag {
  title: string;
  src: string;
  apiParams: string;
}

const List: React.FC<Flag> = ({ title, src, apiParams }) => {
  const [cliked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const handleClick = () => {
    setClicked(true);
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
