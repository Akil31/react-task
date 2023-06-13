import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import CrudComponent from './components/CrudComponent';
import Dashboard from './components/Dashboard';
import Navg from './components/Navg';
import Videocalltest from './components/Videocalltest';
import VideoCall from './components/Videocall';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route path="/crud" component={CrudComponent} />
        {/* <VideoCall/> */}
        {/* <Videocalltest/>
        <Navg/>
        <Dashboard/> */}
      </Switch>
    </Router>
  );
};

export default AppRouter;