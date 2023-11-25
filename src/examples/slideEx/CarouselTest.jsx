import React, { useState } from 'react';
import './carousel.css';
import { shortList, list } from '../../data/carousel-data';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const CarouselTest = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleLeft = () => {
    setActiveIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + list.length) % list.length;
      return newIndex;
    });
  };
  const handleRight = () => {
    setActiveIndex((nextIndex) => {
      const newIndex = (nextIndex + 1) % list.length;
      return newIndex;
    });
  };
  return (
    <div className='carouselTestSection-container'>
      <div className='carouselTest-container'>
        {list.map((item, index) => {
          return (
            <article
              key={index}
              className='carouselTest-slide'
              style={{
                transform: `translateX(${100 * (index - activeIndex)}%)`,
                visibility: index == activeIndex ? 'visible' : 'hidden',
                opacity: index == activeIndex ? '1' : '0',
              }}
            >
              <pre>{activeIndex}</pre>
              {item.name}
            </article>
          );
        })}
      </div>
      <span className='carouselTest-btn left' onClick={handleLeft}>
        <FaArrowLeft />
      </span>
      <span className='carouselTest-btn right ' onClick={handleRight}>
        <FaArrowRight />
      </span>
    </div>
  );
};

export default CarouselTest;
