const API_KEY = 'T8XAJ96D29HW9TC7L4QHJLURF';

function weatherOnPeriodAPI(startDay, endDay, city) {
    return fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${startDay}/${endDay}?unitGroup=metric&include=days&key=${API_KEY}&contentType=json

`)
        .then(response => response.json())

}
function weatherOnDayAPI(city) {
   return fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&include=days&key=${API_KEY}&contentType=json
`)
        .then(response => response.json())
     

}
export default { weatherOnPeriodAPI, weatherOnDayAPI };