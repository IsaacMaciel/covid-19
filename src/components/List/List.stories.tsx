import React from 'react';
import flags from '../../utils/loaderFlags';

import { Container, Body, Text, Flag } from './styles';

const List: React.FC = () => {
  const sp = flags.filter((flag) => flag.title === 'São Paulo')[0];
  return (
    <Container>
      <Body>
        <Flag src={sp.src} />
        <Text>{sp.title}</Text>
      </Body>
    </Container>
  );
};

export default {
  title: 'Card',
  component: List,
};

export { List };
