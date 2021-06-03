import clearSky from './images/clearSky.jpg';
import cloudy from './images/cloudy.jpg';
import snow from './images/snow.jpg';
import rain from './images/rain.jpg';

const pushToDom = (name, weatherMain, temp) => {
  // QUERY PARENTS
  const unitsBtn = document.querySelector('.units-button');
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
  const tempEle = document.createElement('p');
  tempEle.classList.add('temp-figure');
  tempEle.textContent = Math.floor(temp);
  tempEle.innerHTML += ' &#8451';

  // APPEND TO PARENTS
  nameDiv.appendChild(nameElement);
  weatherDiv.append(weatherIconElement, weatherNameElement);
  tempDiv.appendChild(tempEle);
  resultsDiv.append(nameDiv, weatherDiv, tempDiv);

  // HANDLE METRIC BUTTON
  unitsBtn.textContent = '℃';

  unitsBtn.addEventListener('click', () => {
    const tempEle = document.querySelector('.temp-figure');
    if (unitsBtn.textContent === '℃') {
      unitsBtn.textContent = '℉';
      tempEle.textContent = parseInt(tempEle.textContent.substring(0, 2), 10) * 1.8 + 32;
      tempEle.textContent = Math.round(tempEle.textContent);
      tempEle.innerHTML += ' &#8457';
    } else if (unitsBtn.textContent === '℉') {
      unitsBtn.textContent = '℃';
      tempEle.textContent = (parseInt(tempEle.textContent.substring(0, 2), 10) - 32) / 1.8;
      tempEle.textContent = Math.round(tempEle.textContent);
      tempEle.innerHTML += ' &#8451';
    }
  });

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
