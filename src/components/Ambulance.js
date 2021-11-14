import React from 'react';
import './VideoPages.css';


function Ambulance() {
    return (
        <div className='video-container'>
        <video src='/videos/ambulance.mp4' autoPlay loop muted />
      </div>
    );
}


export default Ambulance;