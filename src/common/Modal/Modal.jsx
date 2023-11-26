import React from 'react';
import { createPortal } from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import './Modal.css';

const Modal = ({ children, isOpen, handleClose }) => {
  return isOpen
    ? createPortal(
        <section className='modal-overlay'>
          <div className='modal-container'>
            <div className='modal-content'>{children}</div>
            <button className='modal-close-btn' onClick={handleClose}>
              <FaTimes />
            </button>
          </div>
        </section>,
        document.body
      )
    : null;
};

export default Modal;
