import React from 'react';
import ReactPlayer from "react-player";
import './Player.css';

const Player = () => {
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=c8YR6VX90U0&t=38s'
            width='100%'
            height='100%'
            controls={true}
          />
        </div>
      )
  }

  export default Player;