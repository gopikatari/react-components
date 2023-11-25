import React, { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import './carousel.css';
import { list, longList, shortList } from '../../data/carousel-data';

const Carousel = () => {
  const [data, setData] = useState(longList);
  const [activeItem, setActiveItem] = useState(0);

  const handlePrev = () => {
    setActiveItem((oldIndex) => {
      const newIndex = (oldIndex - 1 + data.length) % data.length;
      return newIndex;
    });
  };
  const handleNext = () => {
    setActiveItem((oldIndex) => {
      const newIndex = (oldIndex + 1) % data.length;
      return newIndex;
    });
  };
  useEffect(() => {
    const interval = setTimeout(() => {
      handleNext();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [activeItem]);

  return (
    <div className='carousel-container'>
      {data.map((item, index) => {
        const { id, image, quote, name, title } = item;
        return (
          <article
            key={id}
            className='slide'
            style={{
              transform: `translateX(${100 * (index - activeItem)}%)`,
              visibility: index == activeItem ? 'visible' : 'hidden',
              opacity: index == activeItem ? '1' : '0',
            }}
          >
            <img className='slide-image' src={image} />
            <h5 className='slide-name'>{name}</h5>
            <p className='slide-title'>{title}</p>
            <p className='slide-quote'>{quote}</p>
          </article>
        );
      })}
      <span onClick={handlePrev} className='control-btn prev-btn'>
        <FaAngleLeft />
      </span>
      <span onClick={handleNext} className='control-btn next-btn'>
        <FaAngleRight />
      </span>
    </div>
  );
};

export default Carousel;
