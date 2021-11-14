import React from 'react';
import '../App.css';
import {LoginButton} from './LoginButton';
import {SignButton} from './SignButton';
import './HeaderWlc.css';

function HeaderWlc() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>SKILLS TO SHARE</h1>
      <p>New on our page?</p>
      <div className='hero-btns'>
        <SignButton
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          SIGN UP
        </SignButton>
        <LoginButton
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          LOG IN
        </LoginButton>
      </div>
    </div>
  );
}

export default HeaderWlc;