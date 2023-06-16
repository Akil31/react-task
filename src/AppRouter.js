import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import CrudComponent from './components/CrudComponent';
import Videocalltest from './components/Videocalltest';
import Videocall from './components/Videocall';
import Dashboard from './components/Dashboard';
const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route path="/doctorlist" component={Dashboard} />
        <Route path="/videocalltest" component={Videocalltest}/>
        <Route path="/videocall" component={Videocall}/>
      </Switch>
    </Router>
  );
};

export default AppRouter;