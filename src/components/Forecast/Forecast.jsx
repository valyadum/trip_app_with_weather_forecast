import React from 'react'

function Forecast() {
    const API_KEY = 'T8XAJ96D29HW9TC7L4QHJLURF';
    const FirstDay ="2024-02-19" //new Date();
    const LastDay = "2024-02-29";
    const city = "Tokyo";

      // yyyy-M-d['T'H:m:s][.SSS][X] - формат дати
    //   fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${FirstDay}/${LastDay}?unitGroup=metric&include=days&key=${API_KEY}&contentType=json
// `)
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&include=days&key=${API_KEY}&contentType=json
`)
      .then(response => response.json())
      .then(console.log);

  return (
    <div>
          <h4>Week</h4>
          <ul>
              <li>weather</li>
          </ul>
    </div>
  );
}

export default Forecast