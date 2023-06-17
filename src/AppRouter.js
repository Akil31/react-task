import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Videocalltest from './components/Videocalltest';
import Videocall from './components/Videocall';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route path="/doctorlist" component={Dashboard} />
        <Route exact path="/videocalltest" component={Videocalltest} />
        <Route exact path="/videocall" component={Videocall} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;