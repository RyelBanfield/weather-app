import './style.css';
import pushToDom from './pushToDom';

// API ERROR HANDLING
const apiErr = () => {
  const header = document.querySelector('header');
  const errDiv = document.createElement('div');
  errDiv.classList.add('errorMessage');
  errDiv.textContent = 'Please enter a valid city name.';
  header.appendChild(errDiv);
  setTimeout(() => {
    errDiv.innerHTML = '';
  }, 4000);
};

// WEATHER API HANDLING
const getWeatherData = async (location) => {
  const apiKey = '303a464ea9aa375660872ba0d5b3afc0';
  const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
  try {
    const response = await fetch(apiCall);
    const data = await response.json();
    pushToDom(data.name, data.weather[0], data.main.temp);
  } catch (err) {
    apiErr();
  }
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
