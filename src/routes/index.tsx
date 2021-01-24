import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LandPage from '../pages/LandPage';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={LandPage} />
  </Switch>
);

export default Routes;
