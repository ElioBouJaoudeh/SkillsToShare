import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import GMap from './components/pages/GMap';
import ST from './components/pages/ST';
import Sign from './components/pages/Sign';
import Profile from './components/pages/Profile';
import Signup from './components/pages/Signup';
import HeaderWlc from './components/HeaderWlc';
import Upload from './components/Upload';
import Home from './components/pages/Home';
import Theft from './components/Theft';
import Ambulance from './components/Ambulance';
import Emergencycall from './components/Emergencycall';
import Injury from './components/Injury';
import Password from './components/pages/Password';
import Player from './components/Player';
import AboutSTS from './components/pages/AboutSTS';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path='/'exact component={HeaderWlc}/>
        <Route path='/map' component={GMap} />
        <Route path='/st' component={ST} />
        <Route path='/prof' component={Profile} />
        <Route path='/login' component={Sign} />
        <Route path='/signup' component={Signup} />
        <Route path='/home' component={Home} />
        <Route path='/theft' component={Theft} />
        <Route path='/emergencycall' component={Emergencycall} />
        <Route path='/ambulance' component={Ambulance} />
        <Route path='/injury' component={Injury} />
        <Route path='/pass' component={Password} />
        <Route path='/player' component={Player} />
        <Route path='/aboutsts' component={AboutSTS} />
        <Route path='/uploadf' component={Upload} />
      </Switch>
    </Router>
    </>
  );
}

export default App;