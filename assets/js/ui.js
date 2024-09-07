//#region : UI class, set weather details to DOM
class UI {
  //#region : get DOM elements
  constructor() {
    this.location = document.querySelector("#w-location");
    this.main = document.querySelector("#w-main");
    this.icon = document.querySelector("#w-icon");
    this.temp = document.querySelector("#w-temp");
    this.temp_min = document.querySelector("#w-temp_min");
    this.temp_max = document.querySelector("#w-temp_max");
    this.pressure = document.querySelector("#w-pressure");
    this.humidity = document.querySelector("#w-humidity");
    this.wind_speed = document.querySelector("#w-wind_speed");
    this.lon = document.querySelector("#w-lon");
    this.lat = document.querySelector("#w-lat");
  }
  //#endregion

  //#region : set weather details to DOM elements
  paint(weather, location) {
    this.location.textContent = location;
    this.main.textContent = this.mainWeather(weather.weather[0].main);
    this.icon.setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    );
    this.temp.textContent = weather.main.temp;
    this.temp_min.textContent = weather.main.temp_min;
    this.temp_max.textContent = weather.main.temp_max;
    this.pressure.textContent = weather.main.pressure;
    this.humidity.textContent = weather.main.humidity;
    this.wind_speed.textContent = weather.wind.speed;
    this.lon.textContent = weather.coord.lon;
    this.lat.textContent = weather.coord.lat;
  }
  //#endregion

  //#region : english to persian translation
  mainWeather(mainWeather) {
    switch (mainWeather) {
      case "Thunderstorm":
        return "رعد و برق";
        break;

      case "Drizzle":
        return "نمنم باران";
        break;

      case "Rain":
        return "بارانی";
        break;

      case "Snow":
        return "برفی";
        break;

      case "Mist":
        return "غبار";
        break;

      case "Smoke":
        return "دود";
        break;

      case "Haze":
        return "غبار مه";
        break;

      case "Dust":
        return "گرد و خاک";
        break;

      case "Fog":
        return "مه";
        break;

      case "Sand":
        return "شن";
        break;

      case "Ash":
        return "خاکستر آتشفشانی";
        break;

      case "Squall":
        return "بوران";
        break;

      case "Tornado":
        return "توقان";
        break;

      case "Clear":
        return "صاف";
        break;

      case "Clouds":
        return "ابری";
        break;

      default:
        return mainWeather;
    }
  }
  //#endregion
}
//#endregion
