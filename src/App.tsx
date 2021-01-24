import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Global from './style/global';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes />
    <Global />
  </BrowserRouter>
);
export default App;
