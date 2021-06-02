const pushToDom = (name, weatherName, weatherIcon, temp) => {
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
  weatherIconElement.src = `http://openweathermap.org/img/w/${weatherIcon}.png`;

  const weatherNameElement = document.createElement('p');
  weatherNameElement.textContent = weatherName;

  const tempElement = document.createElement('p');
  tempElement.textContent = Math.floor(temp);
  tempElement.innerHTML += '&#8451';

  // APPEND TO PARENTS
  nameDiv.appendChild(nameElement);
  weatherDiv.append(weatherIconElement, weatherNameElement);
  tempDiv.appendChild(tempElement);

  resultsDiv.append(nameDiv, weatherDiv, tempDiv);
};

export default pushToDom;