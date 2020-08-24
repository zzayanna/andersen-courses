const fetch = require('node-fetch');
const jsonList = require('./city.list.json');
const API_KEY = '9367469febbaa9db55123ddcbfe2badc';
const URL = `api.openweathermap.org/data/2.5/weather`;

class WeatherRequest {

  constructor(key, url) {
    this.key = key;
    this.url = url;
  }

  makeRequest() {
    return `https://${this.url}?appid=${this.key}`;
  }

}

class MyCityWeather extends WeatherRequest {

  constructor(key, url, city) {
    super(key, url);
    this.city = city;
  }

  async makeRequest() {
    const ENDPOINT = super.makeRequest();
    const API_CALL = `${ENDPOINT}&q=${this.city}&units=metric`;
    try {
      await fetch(API_CALL)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.weatherData = data;
        })
    } catch (err) {
      throw Error(err);
    }
  }
}

const myCityWeather = new MyCityWeather(API_KEY, URL, 'Minsk');
myCityWeather.makeRequest();

class RandomCityWeather extends WeatherRequest {

  constructor(key, url) {
    super(key, url);
  }

  getRandomCity(cityList) {
    let elemNum = Math.floor(Math.random() * cityList.length);
    this.city = cityList[elemNum]['name'];
  }

  async makeRequest(list) {
    this.getRandomCity(list);
    const ENDPOINT = super.makeRequest();
    const API_CALL = `${ENDPOINT}&q=${this.city}&units=metric`;
    try {
      await fetch(API_CALL)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.weatherData = data;
        });
    } catch (err) {
      throw Error(err);
    }
  }

}

const randomCityWeather = new RandomCityWeather(API_KEY, URL);
randomCityWeather.makeRequest(jsonList);
