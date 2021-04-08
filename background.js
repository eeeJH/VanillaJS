var body = document.querySelector('body');

var img_num = 5;

function printImg(imgNum) {
    var img = new Image();
    img.src = `/img/${imgNum + 1}.jpg`;
    img.classList.add('backgroundImg')
    body.appendChild(img);
}

function genRandom() {
    var number = Math.floor(Math.random() * img_num);
    return number;
}

function init() {
    var randomNumber = genRandom();
    printImg(randomNumber);
 }

init();