var timerDOM = document.getElementById("timer");
var decisecond = 0;
var intervalId;

function timerUpdate() {
    decisecond++;
    timerDOM.textContent = (decisecond / 10).toFixed(1);
}

function timerStart() {
    intervalId = setInterval(timerUpdate, 100);
}

function timerStop() {
    clearInterval(intervalId);
}