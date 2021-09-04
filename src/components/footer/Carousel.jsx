import React, { useState, useEffect } from 'react';
import facts from './facts';

const Carousel = () => {
  const [currSlide, setCurrSlide] = useState(0);
  const { length } = facts;

  const goToNext = () => {
    setCurrSlide(currSlide === length - 1 ? 0 : currSlide + 1);
  };

  useEffect(() => {
    setTimeout(goToNext, 10000);
  });

  return (
    <div className='slide'>
      <p>{facts[currSlide]}</p>
    </div>
  );
};

export default Carousel;
