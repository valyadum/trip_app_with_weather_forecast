import React, { useEffect } from 'react'
import { useState } from 'react';
import getDayOfWeek from 'utils/getDayOfWeek';
import API from 'utils/weatherAPI';

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
    <div>
      <h4>Week</h4>
      <ul>
        {data.days?.map(
          ({
            sunriseEpoch,
            icon,
            tempmax,
            tempmin,
            datetime,
          }) => {
            return (
              <li key={sunriseEpoch}>
                <p>{getDayOfWeek(datetime)}</p>
                <img
                  src={require(`../../images/icons/${icon}.png`)}
                  alt={icon}
                />
                <p>
                  {Math.round(tempmax)}/{Math.round(tempmin)}
                </p>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
}

export default Forecast