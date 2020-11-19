import React from 'react';
import { Container, Body, Text, Flag } from './styles';

export interface Flag {
  title: string;
  src: string;
}

const List: React.FC<Flag> = ({ title, src }) => {
  return (
    <Container>
      <Body>
        <Flag src={src} />
        <Text>{title}</Text>
      </Body>
    </Container>
  );
};

export default List;
