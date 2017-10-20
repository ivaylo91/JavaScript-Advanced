window.onload = function () {
     substract();
};

function substract() {

    let number1  = document.getElementById('firstNumber').value;
    let number2 = document.getElementById('secondNumber').value;

    document.getElementById('result').textContent = number1 - number2;
}