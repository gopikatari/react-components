import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import './Modal.css';

const Modal = ({ children, isOpen, handleClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, [isOpen]);

  const handleCloseClick = () => {
    setVisible(false);
    setTimeout(() => {
      handleClose();
    }, 300);
  };

  if (!isOpen) return null;

  return createPortal(
    <section className={visible ? 'modal-overlay active' : 'modal-overlay'}>
      <div className='modal-container'>
        <div className='modal-content'>{children}</div>
        <button className='modal-close-btn' onClick={handleCloseClick}>
          <FaTimes />
        </button>
      </div>
    </section>,
    document.body
  );
};

export default Modal;
