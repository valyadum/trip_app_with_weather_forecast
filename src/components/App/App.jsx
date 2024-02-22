import { useState } from 'react';
import Forecast from '../Forecast/Forecast';
import TodayForecast from '../TodayForecast/TodayForecast';
import TripPart from '../TripPart/TripPart.jsx';
import css from './App.module.css';
export const App = () => {
  const [city, setCity] = useState('Kyiv');
  const [tripInfo, setTripInfo] = useState({});
  const getInfoTrip = (city, startDate, endDate) => {
    console.log(city);
    setCity(city);
    setTripInfo({ city, startDate, endDate });
  };

  return (
    <div className={css.mainPage}>
      <div className={css.tripPart}>
        <h3 className={css.headerText}>
          Weather <span className={css.span}>Forecast</span>
        </h3>
        <TripPart getInfoTrip={getInfoTrip} />
        <Forecast tripInfo={tripInfo} />
      </div>
      <TodayForecast city={city} tripInfo={tripInfo} />
    </div>
  );
};
