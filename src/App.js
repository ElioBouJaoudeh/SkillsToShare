import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/pages/Home';
import GMap from './components/pages/GMap';
import ST from './components/pages/ST';
import Sign from './components/pages/Sign';
import Profile from './components/pages/Profile';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/'exact component={Home}/>
        <Route path='/map' component={GMap} />
        <Route path='/st' component={ST} />
        <Route path='/prof' component={Profile} />
      </Switch>
    </Router>
    </>
  );
}

export default App;