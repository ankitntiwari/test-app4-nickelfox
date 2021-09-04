import React, { useState, useEffect } from "react";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import { data3 } from "../data";
import "./index.css";

export const StaticPart = () => {
  return (
    <div className='static-part'>
      <div className='static-part-image'>
        <img src={image4} />
      </div>
      <div className='static-part-text'>
        <div id='about' className='static-part-text-content'>
          <h5>{data3.heading}</h5>
          <p>{data3.content}</p>
        </div>
      </div>
      <div className='static-part-image'>
        <img src={image5} />
      </div>
    </div>
  );
};
