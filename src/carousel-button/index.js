import React, { useState, useEffect } from "react";
import "./index.css";

export const CarouselButton = ({ handleLeftClick, handleRightClick }) => {
  return (
    <div className='carousel-buttons'>
      <button onClick={handleLeftClick}>
        <svg width='14' height='24' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M13 0L1 12l12 12'
            stroke='#FFF'
            fill='none'
            fill-rule='evenodd'
          />
        </svg>
      </button>
      <button onClick={handleRightClick}>
        <svg width='14' height='24' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M1 0l12 12L1 24'
            stroke='#FFF'
            fill='none'
            fill-rule='evenodd'
          />
        </svg>
      </button>
    </div>
  );
};
