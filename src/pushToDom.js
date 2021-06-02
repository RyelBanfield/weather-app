import clearSky from './images/clearSky.jpg';
import cloudy from './images/cloudy.jpg';
import snow from './images/snow.jpg';
import rain from './images/rain.jpg';

const pushToDom = (name, weatherMain, temp, units) => {
  // QUERY PARENTS
  const resultsDiv = document.querySelector('.results');

  const nameDiv = document.querySelector('.name');
  nameDiv.innerHTML = '';

  const weatherDiv = document.querySelector('.weather');
  weatherDiv.innerHTML = '';

  const tempDiv = document.querySelector('.temp');
  tempDiv.innerHTML = '';

  // CREATE ELEMENTS USING OBJECT
  const nameElement = document.createElement('h2');
  nameElement.textContent = name;

  const weatherIconElement = document.createElement('img');
  weatherIconElement.classList.add('w-75');
  weatherIconElement.src = `http://openweathermap.org/img/w/${weatherMain.icon}.png`;

  const weatherNameElement = document.createElement('p');
  weatherNameElement.textContent = weatherMain.main;

  const tempElement = document.createElement('p');
  tempElement.textContent = Math.floor(temp);
  if (units === 'metric') {
    tempElement.innerHTML += '&#8451';
  } else {
    tempElement.innerHTML += '&#8457;';
  }

  // APPEND TO PARENTS
  nameDiv.appendChild(nameElement);
  weatherDiv.append(weatherIconElement, weatherNameElement);
  tempDiv.appendChild(tempElement);

  resultsDiv.append(nameDiv, weatherDiv, tempDiv);

  // // SET BACKGROUND
  const body = document.querySelector('body');
  if (weatherMain.main === 'Clear') {
    body.style.backgroundImage = `url(${clearSky})`;
  } else if (weatherMain.main === 'Clouds') {
    body.style.backgroundImage = `url(${cloudy})`;
  } else if (weatherMain.main === 'Snow') {
    body.style.backgroundImage = `url(${snow})`;
  } else if (weatherMain.main === 'Rain') {
    body.style.backgroundImage = `url(${rain})`;
  } else {
    body.style.backgroundImage = 'url("")';
  }
};

export default pushToDom;