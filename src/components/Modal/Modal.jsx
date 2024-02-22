import Form from 'components/Form/Form';
import React from 'react';
import { useEffect } from 'react';
import css from './Modal.module.css';


const modalRoot = document.querySelector('#root-modal');

function Modal({ onClose,onClick }) {
  useEffect(() => {
    const closeByEsc = event => {
      if (event.code !== 'Escape') {
        return;
      }
      console.log('close');
      onClose();
    };
    window.addEventListener('keydown', closeByEsc);
    return () => {
      window.removeEventListener('keydown', closeByEsc);
    };
  }, [onClose]);
  return (
    <div>
      <div className={css.overlay}>
        <div className={css.modal}>
          <div className={css.tableHead}>
            <p>Create trip</p>
            <button onClick={onClose}>x</button>
          </div>
                  <Form onClose={onClose} onClick={onClick} />
        </div>
      </div>
    </div>
  );
}

export default Modal;
