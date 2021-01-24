import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

body{
  background: #221A26;
  color: #fff;
  -webkit-font-smooth: antialiased;
  font-family: 'Quicksand', sans-serif;
}


button{
  cursor: pointer;
}
`;
