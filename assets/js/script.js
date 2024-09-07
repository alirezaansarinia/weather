//#region : variables
const changeBtn = document.querySelector("#w-change-btn");
const alertBox = document.querySelector("#alert-box");
//#endregion

//#region : get weather details ops
const storage = new Storage();

const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city, weatherLocation.state);
//#endregion

//#region : get DOM elements ops
const ui = new UI();
//#endregion

//#region : run getWeather() from weather obj
const runGetWeather = () => {
  weather
    .getWeather()
    .then((result) => {
      console.log(result);

      //#region : set weather details into DOM elements
      ui.paint(result, weather.location);
      //#endregion
    })
    .catch((err) => console.log(err.message));
};

document.addEventListener("DOMContentLoaded", runGetWeather);
//#endregion

//#region : run changeLocation() from weather obj
const runChangeLocation = () => {
  const state = document.querySelector("#state").value;
  const city = document.querySelector("#city").value;

  //#region : input values validation
  if (state === "") {
    alertBox.textContent = "لطفا استان خود را وارد کنید";
  } else if (city === "") {
    alertBox.textContent = "لطفا شهر خود را وارد کنید";
  } else {
    //#region : change weather location ops
    weather.changeLocation(city, state);
    //#endregion

    //#region : set changes into localStorage ops
    storage.setLocationData(city, state);
    //#endregion

    //#region : run getWeather() from weather obj again
    runGetWeather();
    //#endregion

    //#region : close modal
    const modalInstance = bootstrap.Modal.getInstance("#locationModal");
    modalInstance.hide();
    //#endregion
  }
  //#endregion
};

changeBtn.addEventListener("click", runChangeLocation);
//#endregion
