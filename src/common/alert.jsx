import React, { useEffect, useState } from 'react';
import './alert.css';
const Alert = ({ type = 'error', content, autoClose = false }) => {
  console.log(content);
  const [show, setShow] = useState(true);
  const [animateWidth, setAnimateWidth] = useState(100);
  useEffect(() => {
    if (autoClose) {
      const interval = setInterval(() => {
        setAnimateWidth((width) => width - 2);
      }, 100);
      setTimeout(() => {
        clearInterval(interval);
        setShow(false);
      }, 3000);
    }

    return () => {
      setAnimateWidth(100);
    };
  }, []);
  return (
    <>
      {show && (
        <div
          className={
            type === 'success' ? `alert alert-success` : `alert alert-error`
          }
          // className='alert'
          // style={{
          //   background: type === 'success' ? 'lightgreen' : 'orangered',
          // }}
        >
          {content}
          {autoClose && (
            <div
              className='alert-animate'
              style={{ width: `${animateWidth}%` }}
            ></div>
          )}
        </div>
      )}
    </>
  );
};

export default Alert;
