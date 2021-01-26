import React from 'react';
import { useHistory } from 'react-router-dom';
import pokebola from '../../assets/94.gif';
import { Container, BackImg, Content, Button } from './styles';

const LandPage: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <Content>
        <img src={pokebola} alt="" />
        <h1>Bem-Vindo</h1>
        <h2>Pókedex</h2>
        <Button onClick={() => history.push('/dashboard')}>Gotcha !</Button>
      </Content>
      <BackImg />
    </Container>
  );
};
export default LandPage;
