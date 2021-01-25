import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LandPage from '../pages/LandPage';
import DashBoard from '../pages/DashBoard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={LandPage} />
    <Route path="/dashboard" component={DashBoard} />
  </Switch>
);

export default Routes;
