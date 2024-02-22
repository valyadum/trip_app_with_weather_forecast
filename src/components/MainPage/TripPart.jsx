import SearchBar from 'components/SearchBar/SearchBar';
import TripList from 'components/TripList/TripList';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import cities from '/Users/valentynadumbrava/Documents/GitHub/trip_app_with_weather_forecast/src/cities.json';

function TripPart({ getInfoTrip }) {
  const [tripList, setTripList] = useState(() => {
    const data = localStorage.getItem('tripKey');
    const tripParse = JSON.parse(data);
    if (tripParse) {
      return tripParse;
    } else {
      return [];
    }
  });
  const [query, setQuery] = useState('');

  useEffect(() => {
    const data = localStorage.getItem('tripKey');
    const tripParse = JSON.parse(data);
    if (tripParse) {
      setTripList([...tripParse]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tripKey', JSON.stringify(tripList));
  }, [tripList]);

  function addPicture(cityName) {
    const cityData = cities.filter(city => {
      return city.city === cityName;
    });
    return cityData[0].picture;
  }
  const addTrip = ({ city, startDate, endDate }) => {
    const newTrip = {
      city,
      startDate,
      endDate,
      picture: addPicture(city),
      id: `id-` + nanoid(),
    };
    console.log(newTrip);
    setTripList([newTrip, ...tripList]);
  };
  const onChangeSearch = event => {
    setQuery(event.currentTarget.value);
  };
  const getFindTrip = () => {
    let normalizeFilter = query.toLowerCase();
    return tripList.filter(trip =>
      trip.city.toLowerCase().includes(normalizeFilter)
    );
  };
  const onDeleteBtn = id => {
    setTripList(
      tripList.filter(trip => {
        return trip.id !== id;
      })
    );
  };

  return (
    <div>
      <SearchBar onChangeSearch={onChangeSearch} />
      <TripList
        tripList={getFindTrip()}
        addTrip={addTrip}
        deleteBtn={onDeleteBtn}
        getInfoTrip={getInfoTrip}
      />
    </div>
  );
}

export default TripPart;
