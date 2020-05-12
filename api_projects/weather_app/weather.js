class Weather {
  constructor(city, state) {
    this.apiKey = '64164420fcaa5faab639e7ae888362fb';
    this.city = city;
    this.state = state;
  }

  //   Fetch Weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&APPID=${this.apiKey}`
    );

    const responseData = await response.json();

    return responseData;
  }

  //   CHange weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
