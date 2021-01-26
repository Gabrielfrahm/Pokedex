import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 80px 0 100px;
  padding: 0 15px;

  @media (max-width: 375px) {
    padding: 0 5px;
  }
`;

export const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;

  @media (max-width: 1050px) {
    grid-gap: 5px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    li:nth-child(10) {
      grid-column: 2;
    }
  }

  @media (max-width: 540px) {
    grid-template-columns: repeat(2, 1fr);

    li:nth-child(10) {
      grid-column: initial;
    }
  }
`;

export const Card = styled.li`
  position: relative;
  padding: 30px 0;
  height: 273.19px;
  color: #fff;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  list-style: none;

  &.fire {
    background: rgba(208, 2, 27, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 10px;
  }
  &.ice {
    background: rgba(80, 227, 194, 0.6);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 10px;
  }
  &.grass {
    background: rgba(126, 211, 33, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 10px;
  }
  &.electric {
    background: rgba(248, 231, 28, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 10px;
  }
  &.water {
    background: rgba(129, 187, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 10px;
  }
  &.ground {
    background: rgba(139, 87, 42, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 10px;
  }
  &.rock {
    background: rgba(73, 43, 11, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 10px;
  }
  &.fairy {
    background: rgba(252, 234, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 10px;
  }
  &.poison {
    background: rgba(152, 215, 165, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 10px;
  }
  &.bug {
    background: rgba(248, 213, 163, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 10px;
  }
  &.dragon {
    background: rgba(151, 179, 230, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 10px;
  }
  &.psychic {
    background: rgba(234, 237, 161, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 10px;
  }
  &.flying {
    background: rgba(245, 245, 245, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 10px;
  }
  &.fighting {
    background: rgba(230, 224, 212, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 10px;
  }
  &.normal {
    background: rgba(245, 245, 245, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 10px;
  }
  &.ghost {
    background: rgba(1, 0, 29, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 10px;
  }
  &.steel {
    background: rgba(199, 204, 208, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 10px;
  }
  &.dark {
    background: rgba(7, 7, 7, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 10px;
  }

  &:before {
    content: '';

    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    display: block;
    width: 150px;
    height: 150px;
    border-radius: 50%;

    background-color: rgba(0, 0, 0, 0.1);
  }

  > div {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
  }

  > img {
    display: block;
    width: 65%;
    margin: 15px auto 0;

    @media (max-width: 540px) {
      width: 50%;
    }

    @media (max-width: 414px) {
      width: 85%;
    }
  }

  strong,
  span {
    display: block;
    text-align: center;
    color: #fff;
  }

  strong {
    width: 150px;
    margin-top: 30px;
    text-transform: capitalize;
    font-size: 1.5rem;
    color: #fff;
  }

  span {
    margin-top: 1px;
    color: #fff;
  }
`;

export const Pagination = styled.div`
  position: relative;
  width: 100%;
  margin-top: 40px;

  .pagination_link {
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    font-weight: bold;
    color: #333;
    text-decoration: none;

    padding: 10px 20px;
    background-color: #ff9000;
    border-radius: 10px;
  }

  .prev {
    position: absolute;
    left: 0;

    svg {
      margin-right: 5px;
    }
  }

  .next {
    position: absolute;
    right: 0;

    svg {
      margin-left: 5px;
    }
  }
`;

export const Page = styled.span`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  font-size: 1.5rem;
  padding: 10px 0;
  color: #ff9000;
  border-radius: 10px;
`;

export const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;

  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;

  width: 200px;
  height: 200px;

  border-radius: 50%;

  img {
    width: 100px;
    animation: loading 1s ease-in-out infinite;
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
