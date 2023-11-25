import React, { useRef } from 'react';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';

const AccordionItem = ({ id, title, info, activeIndex, handleExpand }) => {
  const accordionBodyRef = useRef(null);
  const active = activeIndex === id;

  let accordionBodystyles = {
    height: active
      ? `${accordionBodyRef.current.getBoundingClientRect().height}px`
      : '0px',
  };
  return (
    <div className='accordion-item'>
      <header className='accordion-header' onClick={() => handleExpand(id)}>
        <h4>{title}</h4>
        <span className='accordion-btn'>
          {active ? <MdExpandLess /> : <MdExpandMore />}
        </span>
      </header>

      <div className='accodion-body-wrapper' style={accordionBodystyles}>
        <p className='accordion-body' ref={accordionBodyRef}>
          {info}
        </p>
      </div>
    </div>
  );
};

export default AccordionItem;
