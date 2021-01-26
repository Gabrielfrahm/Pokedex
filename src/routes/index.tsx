import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LandPage from '../pages/LandPage';
import DashBoard from '../pages/DashBoard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={LandPage} />
    <Route path="/dashboard" component={DashBoard} />
    <Route path="/dashboard/page/:slug" exact component={DashBoard} />
    <Route path="/page/:slug" exact component={DashBoard} />
  </Switch>
);

export default Routes;
