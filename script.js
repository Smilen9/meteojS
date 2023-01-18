//********************** Manipulation du DOM ***************************
//Element du formulaire
//label
const searchInput = document.getElementById('searchbar');
//input
const searchCity = document.getElementById('city-input');
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
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity.value}&lang=fr&units=metric&appid=e0a85717b253d52d725887cc3f83c45f`)
.then((res) => res.json()) // Formatage de la réponse en format JSON (format objet)
.then((data) => {
    if(searchCity.value === undefined){
        cityTitle.innerHTML = ""
    }else{
        cityTitle.innerHTML = searchCity.value
    };
    description.innerHTML = "description : " + data.weather[0].description;
    temperature.innerHTML = "température : " + data.main.temp + " °C";
    vent.innerHTML = "vent : " + data.wind.speed + ' m/s';
    humidite.innerHTML = "humidité : " + data.main.humidity + ' %';
    pression.innerHTML = " pression atmosphérique :" + data.main.pressure + " hPa";
    console.log(data);
})
.catch((err) => console.error(err)) // Si erreur 
