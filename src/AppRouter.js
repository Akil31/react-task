import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
  import LoginForm from './components/LoginForm';
import Videocalltest from './components/Videocalltest';
import Videocall from './components/Videocall';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>  
        <Route  path="/" element={<LoginForm/>} />
        <Route path="/doctorlist" element={<Dashboard/>} />
        <Route  path="/videocalltest" element={<Videocalltest/>}/>
        <Route  path="/videocall" element={<Videocall/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;