import Timer from 'components/Timer/Timer';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import getDayOfWeek from 'utils/getDayOfWeek';
import API from 'utils/weatherAPI';

function TodayForecast({ city, tripInfo}) {
  const [data, setData] = useState();


  useEffect(() => {
    API.weatherOnDayAPI(city)
      ?.then(info => {
        setData(info);
      })
      .catch(err => console.error(err));
  }, [city]);
  

return (
  <div>
    {data?.days?.map(({ sunriseEpoch, icon, temp, datetime }) => {
      return (
        <div key={sunriseEpoch}>
          <p>{getDayOfWeek(datetime)}</p>
          <div>
            <img src={require(`../../images/icons/${icon}.png`)} alt={icon} />
            {Math.round(temp)}
          </div>
          <p>{data.address}</p>
        </div>
      );
    })}
    {tripInfo?.startDate && <Timer timeToTrip={tripInfo.startDate} />}
  </div>
);
}

export default TodayForecast;
