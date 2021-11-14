import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import GMap from './components/pages/GMap';
import ST from './components/pages/ST';
import Sign from './components/pages/Sign';
import Profile from './components/pages/Profile';
import Login from './components/pages/Login';
import Preview from './components/pages/Preview';
import HeaderWlc from './components/HeaderWlc';
import Home from './components/pages/Home';
import Theft from './components/Theft';
import Ambulance from './components/Ambulance';
import Emergencycall from './components/Emergencycall';
import Injury from './components/Injury';
import Password from './components/pages/Password';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path='/'exact component={HeaderWlc}/>
        <Route path='/map' component={GMap} />
        <Route path='/st' component={ST} />
        <Route path='/prof' component={Profile} />
        <Route path='/sign-in' component={Sign} />
        <Route path='/login' component={Login} />
        <Route path='/preview' component={Preview} />
        <Route path='/home' component={Home} />
        <Route path='/theft' component={Theft} />
        <Route path='/emergencycall' component={Emergencycall} />
        <Route path='/ambulance' component={Ambulance} />
        <Route path='/injury' component={Injury} />
        <Route path='/pass' component={Password} />
      </Switch>
    </Router>
    </>
  );
}

export default App;