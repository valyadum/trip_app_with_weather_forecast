import Modal from 'components/Modal/Modal';
import React from 'react';
import { useState } from 'react';
import css from './TripList.module.css';

// !!! змінити вигляд дати

function TripList({ tripList, addTrip, deleteBtn, getInfoTrip }) {
  const [showModal, setShowModal] = useState(false);
  const showModalToggle = () => {
    setShowModal(!showModal);
    console.log('open');
  };
  return (
    <ul className={css.list}>
      {tripList?.map(({ city, startDate, endDate, id, picture }) => {
        return (
          <li className={css.items} key={id}>
            <button
              type="button"
              onClick={() => {
                deleteBtn(id);
              }}
            >
              delete
            </button>
            <button
              className={css.activeCard}
              onClick={() => {
                getInfoTrip(city, startDate, endDate);
              }}
            >
              <img src={picture} alt={city} className={css.img} />
              <div className={css.textContainer}>
                <p className={css.text}>{city}</p>
                <p className={css.date}>
                  {startDate} - {endDate}
                </p>
              </div>
            </button>
          </li>
        );
      })}
      {/* <li className={css.items}>
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
      </li> */}
      <li>
        <button className={css.addButton} onClick={showModalToggle}>
          <p className={css.buttonText}>
            <span>+</span>
            <br />
            Add trip
          </p>
        </button>
      </li>
      {showModal && <Modal onClose={showModalToggle} onClick={addTrip} />}
    </ul>
  );
}

export default TripList;
