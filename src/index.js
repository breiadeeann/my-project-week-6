//Feature #1
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let hour = date.getHours();
  let minutes = date.getMinutes().toString().padStart(2, "0");

  return `${day} ${hour}:${minutes}`;
}

let now = new Date();
let currentTime = document.querySelector("#current-date");
currentTime.innerHTML = formatDate(now);

//Feature #2
function cityInput(event) {
  event.preventDefault();
  let cityName = document.querySelector("#search-input");

  console.log(cityName.value);

  let city = cityName.value;
  let apiKey = "3063b23035d47odf96b70c05f0bta423";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

let citySearch = document.querySelector("#form-input");
citySearch.addEventListener("submit", cityInput);

//Feature #3
function displayTemperature(response) {
  console.log(response);

  let temperatureElement = document.querySelector("#current-temperature-value");
  let temperature = Math.round(response.data.temperature.current);
  let currentCity = document.querySelector("#header-city");
  currentCity.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
  console.log(temperature);
}
