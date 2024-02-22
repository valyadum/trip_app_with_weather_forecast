import { useState } from 'react';
import Forecast from '../Forecast/Forecast';
import TodayForecast from '../TodayForecast/TodayForecast';
import TripPart from '../MainPage/TripPart.jsx';

export const App = () => {
  const [city, setCity] = useState('Kyiv');
  const [tripInfo, setTripInfo] = useState({});
  const getInfoTrip = (city, startDate, endDate) => {
    console.log(city);
    setCity(city);
    setTripInfo({ city, startDate, endDate });
  };

  return (
    <div>
      <div>
        <h3>
          Weather <span>Forecast</span>
        </h3>
        <TripPart getInfoTrip={getInfoTrip} />
        <Forecast tripInfo={tripInfo} />
      </div>
      <TodayForecast city={city} tripInfo={tripInfo} />
    </div>
  );
};
