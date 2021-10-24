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
              text='Please Call an Ambulance!'
              label='Ambulance'
              path='/'
            />
            <CardItem
              src='images/img-2.png'
              text='I have been hurt / injured'
              label='Accident'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.png'
              text='Please Check my Medical History'
              label='Medical History'
              path='/'
            />
            <CardItem
              src='images/img-4.png'
              text='There’s been a theft/ a burglary/ an accident!'
              label='Theft'
              path='/'
            />
            <CardItem
              src='images/img-8.png'
              text='Contact the given number in case of emergency'
              label='Contact'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;