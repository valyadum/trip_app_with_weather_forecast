import React from 'react';
import { useState } from 'react';
import css from './Form.module.css';
import cities from '/Users/valentynadumbrava/Documents/GitHub/trip_app_with_weather_forecast/src/cities.json';



// !!! додати помилку для заповнення форми, і прибрати можливість щоб кінцева дата була раніше ніж початкова


function Form({onClose, onClick}) {
  // const todayDate = new Date();
  // const formatDate =
  //   todayDate.getDate() < 10 ? `0${todayDate.getDate()}` : todayDate.getDate();
  // const formatMonth =
  //   todayDate.getMonth() < 10
  //     ? `0${todayDate.getMonth()}`
  //     : todayDate.getMonth();
  // const formattedDate = [todayDate.getFullYear(), formatMonth, formatDate].join(
  //   '-'
  // );

  const [city, setCity] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const dayNow = new Date().getTime();
  // console.log(dayNow);

   function compareStartDay(date) {
     const dayTrip = new Date(date).getTime();
    //  console.log(dayTrip);
     const diff = (dayTrip - dayNow)/1000;
     const days = Math.floor(diff / 86400);
      const lastDay = new Date(endDate).getTime();

     if (days>15 || days < 0|| dayTrip>lastDay)  {
      return alert(
        'This date must not be later than 15 days from today no earlier than today'
      );
     }
     setStartDate(date);
   }
  function compereEndDay(date) {
    console.log(date);
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
    if (city === '' || startDate === '' || endDate === '') {
      return alert('Please enter you data')
    }
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
          placeholder="Please select a city"
          onChange={handleChange}
          value={city}
          name="city"
        >
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
          <span>*</span>Start data
        </p>
        <input
          type="date"
          placeholder="Select date"
          onChange={handleChange}
          value={startDate}
          name="startDate"
        />
      </label>
      <label className={css.label}>
        <p>
          <span>*</span>End data
        </p>
        <input
          type="date"
          placeholder="Select date"
          onChange={handleChange}
          value={endDate}
          name="endDate"
        />
      </label>
      <div className={css.tableFooter}>
        <button type="button" onClick={onClose}>Cancel</button>
        <button type="submit">Save</button>
      </div>
    </form>
  );
}

export default Form;
