//********************** Manipulation du DOM ***************************
//Element du formulaire
//label
const searchInput = document.getElementById('searchbar');
//input
const titleCity = document.getElementById('city-input');
//btn
const searchBtn = document.getElementById('btn');
//Affichage de la ville 
const cityTitle = document.getElementById('title-city');

//Element de ma météo
const description = document.getElementById('description');
const temperature = document.getElementById('temp');
const vent = document.getElementById('wind');
const humidite = document.getElementById('humidity');
const pression = document.getElementById('pressure');

//**************** RECUPERATION API  ******************/
const meteo = fetch(`https://api.openweathermap.org/data/2.5/weather?q=Bordeaux&lang=fr&units=metric&appid=e0a85717b253d52d725887cc3f83c45f`)
.then((res) => res.json()) // Formatage de la réponse en format JSON (format objet)
.then((data) => {
    cityTitle.innerHTML = data.name;
    description.innerHTML = "description : " + data.weather[0].description;
    temperature.innerHTML = "température : " + data.main.temp + " °C";
    vent.innerHTML = "vent : " + data.wind.speed + ' km/h';
    humidite.innerHTML = "humidité : " + data.main.humidity + ' %';
    pressure.innerHTML = " pression atmosphérique :" + data.main.pressure + " hPa";
    console.log(data);
})
.catch((err) => console.error(err)) // Si erreur 
