import Forecast from 'components/Forecast/Forecast';
import SearchBar from 'components/SearchBar/SearchBar';
import TodayForecast from 'components/TodayForecast/TodayForecast';
import TripList from 'components/TripList/TripList';
import React from 'react';

function MainPage() {
  return (
    <div>
      <h3>
        Weather <span>Forecast</span>
      </h3>
      <SearchBar />
      <TripList />
      <Forecast />
      <TodayForecast />
    </div>
  );
}

export default MainPage;
