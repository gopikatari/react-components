import React from 'react';
import './textTitle.css';

const TextTitle = ({ text, className = '', underline = false }) => {
  return (
    <section className={className}>
      <div>{text || 'DefaultTitle'}</div>
      {underline && <div className={`${className} text-underline`}></div>}
    </section>
  );
};

export default TextTitle;
