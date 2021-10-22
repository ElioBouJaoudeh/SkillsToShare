import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Play the videos below!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
              src='images/img-9.png'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/map'
            />
            <CardItem
              src='images/img-2.png'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/map'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.png'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/map'
            />
            <CardItem
              src='images/img-4.png'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/ts'
            />
            <CardItem
              src='images/img-8.png'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;