import './style.css';
import pushToDom from './pushToDom.js';

// WEATHER OBJECT CONSTRUCTOR
const obj = (name, weatherName, weatherIcon, temp) => {
  const nameElement = name;
  const cityWeather = weatherName;
  const cityWeatherIcon = weatherIcon;
  const cityTemp = temp;

  return {
    nameElement, cityWeather, cityWeatherIcon, cityTemp,
  };
};

// CONSOLE.LOG FUNCTION FOR API
const consoleLogData = (weatherData) => {
  console.log(weatherData);
};

// WEATHER API HANDLING
const getWeatherData = async (location) => {
  const apiKey = '303a464ea9aa375660872ba0d5b3afc0';
  const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
  const response = await fetch(apiCall);
  const data = await response.json();
  console.log(data);
  const weather = obj(data.name, data.weather[0].description, data.weather[0].icon, data.main.temp);
  consoleLogData(weather);
  pushToDom(data.name, data.weather[0].description, data.weather[0].icon, data.main.temp);
};

//  SEARCH FUNCTIONALITY
const search = {};

search.EnterPress = () => {
  document.querySelector('input')
    .addEventListener('keyup', (keyPressed) => {
      if (keyPressed.which === 13) {
        const location = document.querySelector('input').value;
        getWeatherData(location);
      }
    });
};

search.Click = () => {
  document.querySelector('.search-button')
    .addEventListener('click', () => {
      const location = document.querySelector('input').value;
      getWeatherData(location);
    });
};

search.EnterPress();
search.Click();