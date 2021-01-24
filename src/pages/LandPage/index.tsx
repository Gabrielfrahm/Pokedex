import React, { useState } from 'react';
import pokebola from '../../assets/94.gif';
import { Container, BackImg, Content, Button } from './styles';

const LandPage: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={pokebola} alt="" />
        <h1>Bem-Vindo</h1>
        <h2>Pókedex</h2>
        <Button>Gotcha !</Button>
      </Content>
      <BackImg />
    </Container>
  );
};
export default LandPage;
