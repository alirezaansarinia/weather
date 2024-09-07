//#region : Weather class, get weather details
class Weather {
  //#region : get city & state
  constructor(city, state) {
    this.apiKey = "86b0bd9b76517148d71f0967cc7de574";
    this.city = city;
    this.state = state;
  }
  //#endregion

  //#region : request/response, get weather details
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`
    );

    if (response.ok) {
      const responseData = await response.json();

      return responseData;
    } else {
      throw new Error(response.status);
    }
  }
  //#endregion

  //#region : change location, change city and state
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
  //#endregion

  //#region : get location details with getter
  get location() {
    return `${this.state} , ${this.city}`;
  }
  //#endregion
}
//#endregion
