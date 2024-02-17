import Modal from 'components/Modal/Modal';
import React from 'react';
import { useState } from 'react';
import berlinImg from "../../images/berlin.jpg"
import css from "./TripList.module.css";


function TripList() {
   
      const [showModal, setShowModal] = useState(false);
    const showModalToggle = () => {
        setShowModal(!showModal);
      };
  return (
    <ul className={css.list}>
      <li className={css.items}>
        <button className={css.activeCard}>
          <img src={berlinImg} alt="Berlin" className={css.img} />
          <div className={css.textContainer}>
            <p className={css.text}>Berlin</p>
            <p className={css.date}>12.07.23 -15.07.23</p>
          </div>
        </button>
      </li>
      <li className={css.items}>
        <button className={css.activeCard}>
          <img src={berlinImg} alt="Berlin" className={css.img} />
          <div className={css.textContainer}>
            <p className={css.text}>Berlin</p>
            <p className={css.date}>12.07.23 -15.07.23</p>
          </div>
        </button>
      </li>
      <li>
        <button className={css.addButton} onClick={showModalToggle}>
          <p className={css.buttonText}>
            {' '}
            <span>+</span>
            <br />
            Add trip
          </p>
        </button>
      </li>
      {showModal && (
        <Modal onClose={showModalToggle} />
      )}
    </ul>
  );
}

export default TripList