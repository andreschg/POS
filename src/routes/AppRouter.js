import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from '../components/Dashboard';
import Order from '../components/Order';
import Navigation from '../components/Navigation';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Navigation/>
      <Switch>
        <Route path="/" component={Dashboard} exact={true} />
        <Route path="/order" component={Order} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;