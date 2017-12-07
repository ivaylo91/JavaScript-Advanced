window.onload = function () {

    timer();
};

function timer() {

    let startBtn = $('#startBtn');
    let stopBtn = $('#stopBtn');
    let seconds = 0;


    startBtn.click(function (e) {

        clearInterval(timer);
        seconds = 0;

        timer = setInterval(step, 1000);
    });

    stopBtn.on('click', function () {

        clearTimeout(timer);
        seconds = 0;
    });

    function step() {
        seconds++;
        if (seconds % 60 < 10) {
            $("#seconds")[0].textContent = "0" + parseInt(seconds % 60);
        }
        else {
            $("#seconds")[0].textContent = parseInt(seconds % 60);
        }
        if (seconds < 360) {
            $("#minutes")[0].textContent = "0" + parseInt(seconds / 60 % 60);
        }
        else {
            $("#minutes")[0].textContent = parseInt(seconds / 60 % 60);
        }
        if (seconds < 36000) {
            $("#hours")[0].textContent = "0" + parseInt(seconds / 3600 % 24);
            if (seconds / 36000 % 60 < 10) {
                $("#minutes")[0].textContent = "0" + parseInt(seconds / 60 % 60);
            }
        }
        else {

            $("#hours")[0].textContent = parseInt(seconds / 3600 % 24);
        }
    }
}