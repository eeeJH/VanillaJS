// Issue

// 1. 400 error(Wrong longitude)
// 2. Uncaught (in promise) TypeError: Cannot read property 'temp' of undefined at weather.js:15
// 브라우저 문제라고 한다..... Chrome을 쓰고있음

var weather = document.querySelector('.weather');
var COORD = 'coord';
var API_KEY = '33aaf1db94cce6be2caf572faa280061';

function getWeather(lati, longi) {


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
    getWeather(lati, longi);
}

function handleGeoError(){
    console.log("Err");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeo, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORD);
    if(loadedCoords === null){
        askForCoords();
    }else{
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();