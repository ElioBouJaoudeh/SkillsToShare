import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/pages/Home';
import GoogleMap from './components/pages/GoogleMap';
import TS from './components/pages/TS';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/'exact component={Home}/>
        <Route path='/map' component={GoogleMap} />
        <Route path='/ts' component={TS} />
       
      </Switch>
    </Router>
    </>
  );
}

export default App;