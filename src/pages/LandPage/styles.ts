import styled from 'styled-components';
import { shade } from 'polished';
import img from '../../assets/pokedex.jpg';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1000px;

  img {
    margin-top: -60px;
    width: 150px;
    height: 150px;
    animation: spin 3s linear infinite;

    /* @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    } */
  }

  h1 {
    font-size: 50px;
    font-weight: 500;
    margin: 20px 0;
  }

  h2 {
    font-size: 30px;
    font-weight: 300;
  }
`;

export const Button = styled.button`
  background-color: #ff9000;
  padding: 8px 20px;
  font-size: 20px;
  margin-top: 20px;
  border-radius: 10px;
  border: none;
  color: #fff;

  &:hover {
    background-color: ${shade(0.2, '#ff9000')};
  }
`;

export const BackImg = styled.div`
  flex: 1;
  background: url(${img}) no-repeat center;
  background-size: cover;
`;
