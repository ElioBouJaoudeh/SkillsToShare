import React, { Component } from 'react';
import NavbarWlc from './components/NavbarWlc';
import HeaderWlc from './components/HeaderWlc';


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './Wlc.css';


function Welcome() {
    return (
        <>
        <Router>
          <NavbarWlc />
          <Switch>

          </Switch>
    
        <HeaderWlc />
        </Router>
        </>
      );
}

export default Welcome;