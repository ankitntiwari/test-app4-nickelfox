import React, { useState, useEffect } from "react";
import { CarouselButton } from "../carousel-button";
import "./index.css";

export const Right = ({ data, handleLeftClick, handleRightClick }) => {
  return (
    <div className='right-part'>
      <div className='right-part-content'>
        <h1>{data.heading}</h1>
        <p>{data.content}</p>
        <div>
          <a href='#'>SHOP NOW </a>
          <svg width='40' height='12' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z'
              fill='#000'
              fill-rule='nonzero'
            />
          </svg>
        </div>
      </div>
      <div className='right-buttons'>
        <CarouselButton
          handleLeftClick={handleLeftClick}
          handleRightClick={handleRightClick}
        />
      </div>
    </div>
  );
};
