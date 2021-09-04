import React, { useState, useEffect } from "react";
import { Left } from "../dynamic-left";
import { Right } from "../dynamic-right";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import { data1 } from "../data";
import { data2 } from "../data";
import "./index.css";
export const DynamicPart = () => {
  const [data, setData] = useState(data1);
  const [imageValue, setImageValue] = useState(image1);

  const handleRightClick = () => {
    setImageValue(image2);
    setData(data2);
  };
  const handleLeftClick = () => {
    setImageValue(image1);
    setData(data1);
  };
  return (
    <div className='dynamic-part'>
      <Left
        imageValue={imageValue}
        handleRightClick={handleRightClick}
        handleLeftClick={handleLeftClick}
      />
      <Right
        data={data}
        handleRightClick={handleRightClick}
        handleLeftClick={handleLeftClick}
      />
    </div>
  );
};
