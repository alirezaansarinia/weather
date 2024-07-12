//#region : variables

const locationName = document.querySelector("#w-location");
const main = document.querySelector("#w-main");
const icon = document.querySelector("#w-icon");
const temp = document.querySelector("#w-temp");
const temp_min = document.querySelector("#w-temp_min");
const temp_max = document.querySelector("#w-temp_max");
const pressure = document.querySelector("#w-pressure");
const humidity = document.querySelector("#w-humidity");
const wind_speed = document.querySelector("#w-wind_speed");
const lon = document.querySelector("#w-lon");
const lat = document.querySelector("#w-lat");

//#endregion

//#region : UI Class

class UI {
  constructor() {
    this.locationName = locationName;
    this.main = main;
    this.icon = icon;
    this.temp = temp;
    this.temp_min = temp_min;
    this.temp_max = temp_max;
    this.pressure = pressure;
    this.humidity = humidity;
    this.wind_speed = wind_speed;
    this.lon = lon;
    this.lat = lat;
  }

  paint(weather, locationName) {
    this.locationName.textContent = locationName;

    this.main.textContent = this.weatherCondition(weather.weather[0].main);

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

  weatherCondition(condition) {
    switch (condition) {
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
        return condition;
    }
  }
}

//#endregion
