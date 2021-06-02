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

  // GIPHY HANDLING
  const newWeatherName = weatherName.replace(/\s/g, '+');
  const giphyUrl = `https://api.giphy.com/v1/gifs/search?q=${newWeatherName}&api_key=U9aIyKli7Jxp38TqdOC2yePIEm07ZSHb`;

  const GiphyAJAXCall = new XMLHttpRequest();
  GiphyAJAXCall.open('GET', giphyUrl);
  GiphyAJAXCall.send();

  GiphyAJAXCall.addEventListener('load', (callResponse) => {
    const data = callResponse.target.response;
    const response = JSON.parse(data);
    const imageUrls = response.data;
    const container = document.querySelector('.giphy-container');
    container.innerHTML = '';

    imageUrls.forEach((image, index) => {
      setTimeout(() => {
        const imageUrl = image.images.fixed_height.url;
        container.innerHTML = `<img src="${imageUrl}" class="m-1">`;
      }, index * 2000);
    });
  });
};

export default pushToDom;