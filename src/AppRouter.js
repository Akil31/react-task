import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Videocalltest from './components/Videocalltest';
import Videocall from './components/Videocall';
import Dashboard from './components/Dashboard';
import { Routes } from 'react-router';
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route path="/doctorlist" component={Dashboard}>
          <Dashboard/>
        </Route>
        <Route exact path="/videocalltest" component={Videocalltest}>
          <Videocalltest/>
          </Route>
        <Route exact path="/videocall" component={Videocall}>
          <Videocall/>
          </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;