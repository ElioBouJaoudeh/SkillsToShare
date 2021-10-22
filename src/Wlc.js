import React, { Component } from 'react';
import NavbarWlc from './components/NavbarWlc';
import HeaderWlc from './components/HeaderWlc';
import Footer from './components/Footer';
import SignUp from './components/pages/SignUp';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './Wlc.css';


function Welcome() {
    return (
        <>
        <Router>
          <NavbarWlc />
          <Switch>
          <Route path='/sign-up' component={SignUp} />
          </Switch>
    
        <HeaderWlc />
        <Footer />
        </Router>
        </>
      );
}

export default Welcome;