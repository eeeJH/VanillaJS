var weather = document.querySelector('.weather');


var COORD = 'coord';
var API_KEY = '70a621393dafc2836b5fb9b83bd8a7b2';

function getweather(lati, longi) {
    fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${API_KEY}&units=metric`
    ).then(function (response) {
        return response.json();
    }).then(function (json) {
        var temperature = json.main.temp;
        var place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });
}

function saveCoord(coordObj) {
    localStorage.setItem(COORD, JSON.stringify(coordObj));
}

function handleGeo(position) {
    var lati = position.coords.latitude;
    var longi = position.coords.longitude;
    var coordObj = {
        lati,
        longi
    };

    saveCoord(coordObj);
    getweather(lati, longi);
}

function handleGeoErr() {
    console.log('Err')
}

function askforCoords() {
    navigator.geolocation.getCurrentPosition(handleGeo, handleGeoErr);
 }

function loadCoords() {
    var loadCoord = localStorage.getItem(COORD);
    if (loadCoord === null) { 
        askforCoords();
    }
    else {
        var parseCoord = JSON.parse(loadCoord);
        getweather(parseCoord.latitude, parseCoord.longitude);
    }
}

function init() {
    loadCoords();
}

init();