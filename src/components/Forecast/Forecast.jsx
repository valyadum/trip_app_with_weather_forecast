import React, { useEffect } from 'react'
import { useState } from 'react';
import getDayOfWeek from 'utils/getDayOfWeek';
import API from 'utils/weatherAPI';
import css from './Forecast.module.css';


function Forecast({tripInfo}) {
  const [data, setData] = useState([]);
  const startDay = tripInfo.startDate; 
  const endDay = tripInfo.endDate;
  const city = tripInfo.city;
  
    useEffect(() => {
      if (!city) {
        return;
      }
      API.weatherOnPeriodAPI(startDay, endDay, city)
        .then(info => {
          setData(info);
        })
        .catch(err => console.error(err));
    }, [tripInfo]);

  return (
    <div className={css.section}>
      {data?.days && <h4>Week</h4>}
      <ul className={css.list}>
        {data.days?.map(
          ({ sunriseEpoch, icon, tempmax, tempmin, datetime }) => {
            return (
              // <div>
              <li key={sunriseEpoch} className={css.item}>
                <p className={css.day}>{getDayOfWeek(datetime)}</p>
                <img
                  src={require(`../../images/icons/${icon}.png`)}
                  alt={icon}
                />
                <p className={css.temp}>
                  {Math.round(tempmax)}
                  <span>&#176;</span>/{Math.round(tempmin)}<span>&#176;</span>
                </p>
              </li>
              // </div>
            );
          }
        )}
      </ul>
    </div>
  );
}

export default Forecast