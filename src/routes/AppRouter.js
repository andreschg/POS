import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Grid } from 'react-bootstrap';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import Order from '../components/Order';
import Navigation from '../components/Navigation';
import Sidebar from '../components/Sidebar';
import Options from '../components/Options';
import Menu from '../components/menu/Menu';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Navigation />
      <div className="app-body" >
        <Sidebar />
        <Grid md={12} >
          <Switch>
            <Route path="/" component={Options} exact={true} />
            <Route path="/order" component={Order} />
            <Route path="/menu" component={Menu} />
          </Switch>
        </Grid>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;