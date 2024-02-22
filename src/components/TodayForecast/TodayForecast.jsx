import Timer from 'components/Timer/Timer';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import getDayOfWeek from 'utils/getDayOfWeek';
import  { weatherOnDayAPI } from 'utils/weatherAPI';
import css from './TodayForecast.module.css';

function TodayForecast({ city, tripInfo}) {
  const [data, setData] = useState();
  useEffect(() => {
    weatherOnDayAPI(city)
      ?.then(info => {
        setData(info);
      })
      .catch(err => console.error(err));
  }, [city]);
  

return (
  <div className={css.mainSection} >
    <div className={css.section}>
    {data?.days?.map(({ sunriseEpoch, icon, temp, datetime }) => {
      return (
        <div key={sunriseEpoch} className={css.weather}>
          <p className={css.dayOfWeek}>{getDayOfWeek(datetime)}</p>
          <div className={css.temp}>
            <img
              src={require(`../../images/icons/${icon}.png`)}
              alt={icon}
              className={css.img}
            />
            <p className={css.tempText}>
              {Math.round(temp)} <span className={css.celsius}>&#8451;</span> 
            </p>
          </div>
          <p className={css.cityName}>{data.address}</p>
        </div>
      );
    })}
      {tripInfo?.startDate && <Timer timeToTrip={tripInfo.startDate} />}
    </div>
  </div>
);
}

export default TodayForecast;
