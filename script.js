const times = document.getElementById("times");
const laps = document.getElementById("laps");

let clicked = false;
let secondsPassed = 0;

let formattedTime;
let timer;

zero();
function zero() {
    times.innerHTML = "00:00:00";
    secondsPassed = 0;
}

function count() {
    secondsPassed++;

    // Conversion from seconds to HH:MM:SS

    let hours = Math.floor(secondsPassed / 60 / 60);
    let minutes = Math.floor(secondsPassed / 60) - (hours * 60);
    let seconds = secondsPassed % 60;

    formattedTime = hours.toString().padStart(2, '0') + ':' +
        minutes.toString().padStart(2, '0') + ':' +
        seconds.toString().padStart(2, '0');

    times.innerHTML = formattedTime;
}

function start() {
    if (clicked) return;
    clicked = true;
    setInterval(count, 1000);
}

function lap() {
    if (!clicked) return;
    laps.innerHTML += `${formattedTime}<br />`;
    clearInterval(timer);
    zero();
}

function reload() {
    location.reload();
}