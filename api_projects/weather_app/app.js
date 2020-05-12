// Initialize weather object
const weather = new Weather('las vegas');

// Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Miami');

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      console.log(results);
    })
    .catch(err => console.log(err));
}
