import React from 'react';
import '../App.css';
import { Button } from './Button1';
import { Button2 } from './Button2';
import './HeaderWlc.css';

function HeaderWlc() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>SKILLS TO SHARE</h1>
      <p>New on our page?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          SIGN UP
        </Button>
        <Button2
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH PREVIEW <i className='far fa-play-circle' />
        </Button2>
      </div>
    </div>
  );
}

export default HeaderWlc;