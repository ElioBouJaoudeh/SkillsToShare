import React from 'react';
import ReactPlayer from "react-player";
import './Player.css';

const Player = () => {
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='htthttps://www.youtube.com/watch?v=fWr0-PwmEN8'
            width='100%'
            height='100%'
            controls={true}
          />
        </div>
      )
  }

  export default Player;