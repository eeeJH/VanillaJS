var clockContainer = document.querySelector('.clock'),
    clockTitle = clockContainer.querySelector('h1');

function getTime() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    clockTitle.innerText = `${hour < 10 ? `0${hour}` : `${hour}`}:${min < 10 ? `0${min}` : `${min}`}:${sec < 10 ? `0${sec}` : `${sec}`}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();