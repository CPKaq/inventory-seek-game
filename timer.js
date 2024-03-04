var timerDOM = document.getElementById("timer");
var isRunning = false;
var decisecond = 0;

function timerToggle() {
    isRunning = !isRunning;
}

function timerUpdate() {
    if(isRunning) {
        decisecond++;
        timerDOM.textContent = (decisecond / 10).toFixed(1);
    }
}

