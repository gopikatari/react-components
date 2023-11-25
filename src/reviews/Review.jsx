import React from 'react';
import './review.css';
import { FaQuoteLeft } from 'react-icons/fa';
const Reviews = () => {
  return (
    <div className='review'>
      <div className='imgContainer'>
        <img src='https://randomuser.me/api/portraits/women/19.jpg' alt='img' />
        <span className='quote'>
          <FaQuoteLeft />
        </span>
      </div>
      <div className='review-details'>
        <h4 className='review-title'>PeterJones</h4>
        <h6 className='review-subtitle'>PeterJones</h6>
        <p className='review-info'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia saepe ab
          error! Laboriosam voluptatem deleniti amet omnis eligendi reiciendis
          provident facere quo quis! Nam.
        </p>
      </div>
    </div>
  );
};

export default Reviews;
