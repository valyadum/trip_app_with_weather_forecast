import React from 'react';
import { useState } from 'react';
import css from './Form.module.css';
import cities from '../../data/cities.json';

function Form({ onClose, onClick }) {
  const [city, setCity] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const today = new Date().toString();
  const dayNow = new Date().getTime();
  console.log(today);
  console.log(dayNow);
  function compareStartDay(date) {
    const dayTrip = new Date(date).getTime(); 
    const diff = (dayTrip - dayNow) / 1000;
    const days = Math.floor(diff / 86400);
    const lastDay = new Date(endDate).getTime();
    if (days > 15 || days < 0 || dayTrip > lastDay) {
      return alert(
        'This date must not be later than 15 days from today and no earlier than today'
      );
    }
    setStartDate(date);
  }
  function compereEndDay(date) {
    const dayTrip = new Date(date).getTime();
    const diff = (dayTrip - dayNow) / 1000;
    const days = Math.floor(diff / 86400);
    const firstDay = new Date(startDate).getTime();
    if (days > 15 || dayTrip < firstDay) {
      return alert('This date must not be later than 15 days from today');
    }
    setEndDate(date);
  }
  function handleChange(event) {
    const { value, name } = event.target;
    switch (name) {
      case 'city':
        setCity(value);
        break;
      case 'startDate':
        compareStartDay(value);
        break;
      case 'endDate':
        compereEndDay(value);
        break;
      default:
        break;
    }
  }
  function onAddTrip(event) {
    event.preventDefault();
    const newTrip = {
      city,
      startDate,
      endDate,
    };
    onClick(newTrip);
    resetParams();
    onClose();
  }
  function resetParams(params) {
    setStartDate('');
    setEndDate('');
    setCity('');
  }


  return (
    <form className={css.form} onSubmit={onAddTrip}>
      <label className={css.label}>
        <p>
          <span>*</span> City
        </p>
        <select
          required
          placeholder="Please select a city"
          onChange={handleChange}
          value={city}
          name="city"
        >
          <option value="" disabled>
            Please select a city
          </option>
          {cities.map(({ city }) => {
            return (
              <option key={city} value={city}>
                {city}
              </option>
            );
          })}
        </select>
      </label>
      <label className={css.label}>
        <p>
          <span>*</span>Start date
        </p>
        <input
          required
          // type="date"
          placeholder="Select date"
          onChange={handleChange}
          value={startDate}
          name="startDate"
          min={today}
          type="text"
          onFocus={e => (e.target.type = 'date')}
          onBlur={e => (e.target.type = 'text')}
        />
      </label>
      <label className={css.label}>
        <p>
          <span>*</span>End date
        </p>
        <input
          required
          // type="date"
          placeholder="Select date"
          onChange={handleChange}
          value={endDate}
          name="endDate"
          min={startDate}
          type="text"
          onFocus={e => (e.target.type = 'date')}
          onBlur={e => (e.target.type = 'text')}
        />
      </label>
      <div className={css.tableFooter}>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
        <button type="submit">Save</button>
      </div>
    </form>
  );
}

export default Form;
