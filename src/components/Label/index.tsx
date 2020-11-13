import React from 'react';

import { Container } from './styles';

interface ILabel {
  field: string;
  text: string;
}

const Label: React.FC<ILabel> = ({ field, text, children }) => (
  <Container>
    {children}
    <b>{field}:</b>
    <span>{text}</span>
  </Container>
);

export default Label;
