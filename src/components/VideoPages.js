import React from 'react';
import './VideoPages.css';

function Theft() {
    return (
        <div className='video-containers'>
        <video src='/videos/theft.mp4' autoPlay loop muted />
      </div>
    );
}

function Ambulance() {
    return (
        <div className='video-container'>
        <video src='/videos/ambulance.mp4' autoPlay loop muted />
      </div>
    );
}

function Injury() {
    return (
    <div className='video-container'>
    <video src='/videos/video-1.mp4' autoPlay loop muted />
  </div>
);
}

function Emergencycall() {
    return (
        <div className='video-container'>
        <video src='/videos/emergencycall-1.mp4' autoPlay loop muted />
      </div>
    );
}

export default {Theft, Ambulance, Injury, Emergencycall};