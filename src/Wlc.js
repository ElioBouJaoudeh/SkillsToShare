import React, { Component } from 'react';
import Navbar from './components/Navbar';
import HeaderWlc from './components/HeaderWlc';
import Footer from './components/Footer';
import SignUp from './components/pages/SignUp';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './Wlc.css';


function Welcome() {
    return (
        <>
        <Router>
          <Navbar />
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