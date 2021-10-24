import React, { Component } from 'react';
import NavbarWlc from './components/NavbarWlc';
import HeaderWlc from './components/HeaderWlc';
import Footer from './components/Footer';
import Sign from './components/pages/Sign';
import Login from './components/pages/Login';
import Preview from './components/pages/Preview';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './Wlc.css';


function Welcome() {
    return (
        <>
        <Router>
          <NavbarWlc />
          <Switch>
          <Route path='/sign-in' component={Sign} />
          <Route path='/login' component={Login} />
          <Route path='/preview' component={Preview} />
          </Switch>
    
        <HeaderWlc />
        <Footer />
        </Router>
        </>
      );
}

export default Welcome;