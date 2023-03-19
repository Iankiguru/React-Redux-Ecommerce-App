import React from 'react';
import MainCarousel from './MainCarousel';
import ShoppingList from './ShoppingList';
import Subscribe from './Subscribe';

const home = () => {
  return (
    <div className='home'>
      <MainCarousel />
      <ShoppingList/>
      <Subscribe/>
      
    </div>
  );
}

export default home;
