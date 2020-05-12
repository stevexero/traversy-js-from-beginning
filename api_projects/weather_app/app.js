// Initialize weather object
const weather = new Weather('las vegas');

// Init UI
const ui = new UI();

// Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Miami');

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      ui.paint(results);
      console.log(results);
    })
    .catch(err => console.log(err));
}
