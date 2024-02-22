import React from 'react';
import { useState } from 'react';
import css from './Form.module.css';
import cities from '../../data/cities.json';

function Form({ onClose, onClick }) {
  const [city, setCity] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const dayNow = new Date();

  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

  function formatDate(date) {
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate() + 1),
    ].join('-');
  }
  function maxDay(date) {
    const plusDay = 15 * 86400000;
    const maxDate = new Date(date).getTime() + plusDay;
    return [
      new Date(maxDate).getFullYear(),
      padTo2Digits(new Date(maxDate).getMonth() + 1),
      padTo2Digits(new Date(maxDate).getDate()),
    ].join('-');
  }
  function handleChange(event) {
    const { value, name } = event.target;
    switch (name) {
      case 'city':
        setCity(value);
        break;
      case 'startDate':
        setStartDate(value);
        break;
      case 'endDate':
        setEndDate(value);
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
          <span className={css.span}>*</span> City
        </p>
        <select
          required
          placeholder="Please select a city"
          onChange={handleChange}
          value={city}
          name="city"
          className={css.input}
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
          <span className={css.span}>*</span> Start date
        </p>
        <input
          required
          // type="date"
          placeholder="Select date"
          onChange={handleChange}
          value={startDate}
          name="startDate"
          min={formatDate(dayNow)}
          max={maxDay(dayNow)}
          type="text"
          onFocus={e => (e.target.type = 'date')}
          onBlur={e => (e.target.type = 'text')}
          className={css.input}
        />
      </label>
      <label className={css.label}>
        <p>
          <span className={css.span}>*</span> End date
        </p>
        <input
          required
          // type="date"
          placeholder="Select date"
          onChange={handleChange}
          value={endDate}
          name="endDate"
          min={startDate}
          max={maxDay(dayNow)}
          type="text"
          onFocus={e => (e.target.type = 'date')}
          onBlur={e => (e.target.type = 'text')}
          className={css.input}
        />
      </label>
      <div className={css.tableFooter}>
        <button type="button" onClick={onClose} className={css.btnCancel}>
          Cancel
        </button>
        <button type="submit" className={css.btnSave}>
          Save
        </button>
      </div>
    </form>
  );
}

export default Form;
