import './style.css';
import pushToDom from './pushToDom.js';

// WEATHER OBJECT CONSTRUCTOR
const obj = (name, weatherMain, temp) => {
  const nameElement = name;
  const cityWeatherMain = weatherMain;
  const cityTemp = temp;

  return {
    nameElement, cityWeatherMain, cityTemp,
  };
};

// CONSOLE.LOG FUNCTION FOR API
const consoleLogData = (weatherData) => {
  console.log(weatherData);
};

// WEATHER API HANDLING
const getWeatherData = async (location, units) => {
  const apiKey = '303a464ea9aa375660872ba0d5b3afc0';
  const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&appid=${apiKey}`;
  const response = await fetch(apiCall);
  const data = await response.json();
  console.log(data);
  const weather = obj(data.name, data.weather[0], data.main.temp);
  consoleLogData(weather);
  pushToDom(data.name, data.weather[0], data.main.temp, units);
};

//  SEARCH FUNCTIONALITY
const search = {};

search.EnterPress = () => {
  document.querySelector('input')
    .addEventListener('keyup', (keyPressed) => {
      if (keyPressed.which === 13) {
        const location = document.querySelector('input').value;
        const unitButtons = document.querySelectorAll('.unit-buttons');
        if (unitButtons[0].classList.contains('d-none')) {
          const units = 'imperial';
          getWeatherData(location, units);
        } else {
          const units = 'metric';
          getWeatherData(location, units);
        }
      }
    });
};

search.Click = () => {
  document.querySelector('.search-button')
    .addEventListener('click', () => {
      const location = document.querySelector('input').value;
      const unitButtons = document.querySelectorAll('.unit-buttons');
      if (unitButtons[0].classList.contains('d-none')) {
        const units = 'imperial';
        getWeatherData(location, units);
      } else {
        const units = 'metric';
        getWeatherData(location, units);
      }
    });
};

search.EnterPress();
search.Click();

const celciusBtn = document.querySelector('.celcius-btn');
const fahrenheitBtn = document.querySelector('.fahrenheit-btn');

celciusBtn.addEventListener('click', () => {
  if (celciusBtn.classList.contains('d-none')) {
    celciusBtn.classList.remove('d-none');
    fahrenheitBtn.classList.add('d-none');
  } else {
    celciusBtn.classList.add('d-none');
    fahrenheitBtn.classList.remove('d-none');
  }
});

fahrenheitBtn.addEventListener('click', () => {
  if (fahrenheitBtn.classList.contains('d-none')) {
    fahrenheitBtn.classList.remove('d-none');
    celciusBtn.classList.add('d-none');
  } else {
    fahrenheitBtn.classList.add('d-none');
    celciusBtn.classList.remove('d-none');
  }
});