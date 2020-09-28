const fetch = require('node-fetch');
const jsonList = require('./city.list.json');
const API_KEY = '9367469febbaa9db55123ddcbfe2badc';
const URL = `api.openweathermap.org/data/2.5/weather`;

class WeatherRequest {
  constructor(key, url) {
    this.key = key;
    this.url = url;
  }

  async makeRequest() {
    try {
      const response = await fetch(this.api_call);
      const data = await response.json();
      await (this.weatherData = data);
    } catch (err) {
      throw Error(err);
    }
  }
}

class MyCityWeather extends WeatherRequest {
  constructor(key, url, city) {
    super(key, url);
    this.city = city;
  }

  async makeRequest() {
    this.api_call = `https://${this.url}?appid=${this.key}&q=${this.city}&units=metric`;
    super.makeRequest();
  }
}

const myCityWeather = new MyCityWeather(API_KEY, URL, 'Minsk');
myCityWeather.makeRequest();

class RandomCityWeather extends WeatherRequest {
  constructor(key, url) {
    super(key, url);
  }

  getRandomCity(cityList) {
    const elemNum = Math.floor(Math.random() * cityList.length);
    this.city = cityList[elemNum]['name'];
  }

  async makeRequest(list) {
    this.getRandomCity(list);
    this.api_call = `https://${this.url}?appid=${this.key}&q=${this.city}&units=metric`;
    super.makeRequest();
  }
}

const randomCityWeather = new RandomCityWeather(API_KEY, URL);
randomCityWeather.makeRequest(jsonList);
