window.onload = function () {
    stopwatch();
};

function stopwatch() {

    let startBtn = document.getElementById('startBtn');
    startBtn.addEventListener('click', startPressed);
    let stopBtn = document.getElementById('stopBtn');
    stopBtn.addEventListener('click', stopPressed);

    let timer = null;
    let seconds = 0;

    function tick() {
        seconds++;

        document.getElementById('time').textContent = ('0' + Math.floor(seconds / 60)).slice(-2) + ":" + ('0' + seconds % 60).slice(-2);
    }

    function startPressed() {
        seconds = 0;
        stopBtn.disabled = false;
        startBtn.disabled = true;

        timer = setInterval(tick, 1000);
    }

    function stopPressed() {
        stopBtn.disabled = true;
        startBtn.disabled = false;

        clearInterval(timer);
    }
}