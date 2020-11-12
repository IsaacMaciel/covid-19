import React from "react";
import { Container } from "./styles";

const Card: React.FC = () => (
    <Container>
        <div>Brasil</div>
        <div>Numero de mortos: 52134</div>
        <div>Numero de Recuperados: 4145</div>
        <div>Novos Casos: 71345</div>
    </Container>
);

export default Card;
