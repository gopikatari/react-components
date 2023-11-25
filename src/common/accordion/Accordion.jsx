import React, { useState } from 'react';
import AccordionItem from './AccordionItem';
import TextTitle from '../text-title/TextTitle';
import './accordion.css';

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (id) => {
    const newActiveIndex = activeIndex === id ? null : id;
    setActiveIndex(newActiveIndex);
  };

  return (
    <div className='accordion'>
      <TextTitle className={`accordionTitle`} text='Questions?' />
      {data.map((item) => (
        <AccordionItem
          activeIndex={activeIndex}
          className='accordion-item'
          handleExpand={handleItemClick}
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
};

export default Accordion;
