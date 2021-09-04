import React, { useState, useEffect } from "react";
import { CarouselButton } from "../carousel-button";
import "./index.css";
export const Left = ({ imageValue, handleLeftClick, handleRightClick }) => {
  return (
    <div className='left-part'>
      <div className='left-image'>
        <img src={imageValue} />
      </div>

      <div className='left-carousel-buttons'>
        <CarouselButton
          handleLeftClick={handleLeftClick}
          handleRightClick={handleRightClick}
        />
      </div>

      <div className='left-links'>
        <div className='left-links-ham-icon'>
          <svg width='20' height='14' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z'
              fill='#FFF'
              fill-rule='evenodd'
            />
          </svg>
        </div>
        <div className='logo'>
          <a href='#'>room</a>
        </div>
        <div className='left-links-group'>
          <a href='#'>Home</a>
          <a href='#'>Shop</a>
          <a href='#about'>About</a>
          <a href='#'>Contact</a>
        </div>
      </div>
    </div>
  );
};
