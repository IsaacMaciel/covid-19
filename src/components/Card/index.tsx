import React from 'react';
import { Container } from './styles';

import loaderFlags from '../../utils/loaderFlags';

const Card: React.FC = () => {
  const stateWithFlags = loaderFlags();

  console.log(stateWithFlags);
  return (
    <Container>
      <div>Brasil</div>
      <div>Numero de mortos: 52134</div>
      <div>Numero de Recuperados: 4145</div>
      <div>Novos Casos: 71345</div>
    </Container>
  );
};

export default Card;
