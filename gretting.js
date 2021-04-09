var form = document.querySelector('.jsform'),
    input = form.querySelector('input'),
    greeting = document.querySelector('.jsgreeting');

    // local storage.

var USER = 'lee';
var SHOWING = 'showing';


function saveName(text) {
    localStorage.setItem(USER, text);
}

function handleSubmit(event) {
    event.preventDefault();
    var currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING);
    form.addEventListener("submit", handleSubmit);
}

function loadName() {
    var currentUser = localStorage.getItem(USER);

    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function paintGreeting(text) {
    form.classList.remove(SHOWING);
    greeting.classList.add(SHOWING);
    greeting.innerText = `Hi! ${text}. What are you doing today?? +_+`;
}

function init() {
    loadName();
}


init();
