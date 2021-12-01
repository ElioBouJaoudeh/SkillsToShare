import React from 'react';
import '../App.css';
import { UploadButton } from './UploadButton';
import { PlayerButton } from './PlayerButton';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>SKILLS TO SHARE</h1>
      <p>Always at your service.</p>
      <div className='hero-btns'>
        <UploadButton
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          UPLOAD FILES
        </UploadButton>
        <PlayerButton
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH PREVIEW <i className='far fa-play-circle' />
        </PlayerButton>
      </div>
    </div>
  );
}

export default HeroSection;