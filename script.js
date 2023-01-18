
// Récupération des références aux éléments HTML
const cityForm = document.getElementById('city-form');
const cityInput = document.getElementById('city-input');
const weatherData = document.getElementById('weather-data');

// Fonction pour afficher les données météo
function displayWeather(data) {
  weatherData.innerHTML = `La température actuelle à ${data.name} est de ${data.main.temp} degrés Celsius.`;
}

// Soumission du formulaire
cityForm.addEventListener('submit', event => {
  event.preventDefault();
  // Récupération des données météo
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=56da8c52b2473f553ac8607bfe5ead64`)
    .then(response => response.json())
    .then(data => displayWeather(data))
    .catch(error => console.error(error));
});