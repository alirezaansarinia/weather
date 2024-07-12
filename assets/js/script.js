//#region : variables

const w_change_btn = document.querySelector("#w-change-btn");
const state = document.querySelector("#state");
const city = document.querySelector("#city");

//#endregion

//#region : objects
const storage = new Storage();

const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city, weatherLocation.state);

const ui = new UI();

//#endregion

//#region : functions

const getWeather = () => {
  weather
    .getWeather()
    .then((result) => {
      ui.paint(result, weather.locationName);
    })
    .catch((err) => console.log(err.message));
};

const changeLocation = () => {
  if (city.value !== "" && state.value !== "") {
    weather.changeLocation(city.value, state.value);

    storage.setLocationData(city.value, state.value);

    getWeather();

    const modalInstance = bootstrap.Modal.getInstance("#locationModal");
    modalInstance.hide();

    city.value = "";
    state.value = "";
  } else {
    alert("پرکردن تمامی فیلدها الزامی است!");
  }
};

//#endregion

//#region : events

document.addEventListener("DOMContentLoaded", getWeather);

w_change_btn.addEventListener("click", changeLocation);

//#endregion
