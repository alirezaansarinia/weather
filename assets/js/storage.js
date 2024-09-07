//#region : Storage class, set weather details into localStorage
class Storage {
  //#region : default values and new ones
  constructor() {
    this.city;
    this.state;
    this.defaultCity = "تهران";
    this.defaultState = "تهران";
  }
  //#endregion

  //#region : get location data from localStorage or defaults
  getLocationData() {
    if (localStorage.getItem("city") === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem("city");
    }

    if (localStorage.getItem("state") === null) {
      this.state = this.defaultState;
    } else {
      this.state = localStorage.getItem("state");
    }

    return {
      city: this.city,
      state: this.state,
    };
  }
  //#endregion

  //#region : set location data into localStorage
  setLocationData(city, state) {
    localStorage.setItem("city", city);
    localStorage.setItem("state", state);
  }
  //#endregion
}
//#endregion
