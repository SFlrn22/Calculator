const res = document.querySelector(".result");
const upperText = document.querySelector(".operation");
const numButtons = document.querySelectorAll(".number");
const delButton = document.querySelector("#delete");
const clearButton = document.querySelector("#clear");
const plusButton = document.querySelector("#plus");
const subtractButton = document.querySelector("#minus");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const equalButton = document.querySelector("#equal");
const pointButton = document.querySelector("#point");

let firstNumber = 0;
let secondNumber = 0;
let resArr = [];
let plusClicked = 0;
let subtractClicked = 0;
let multiplyClicked = 0;
let divideClicked = 0;
let result = 0;
let pointAdded = 0;

function add(a, b) {
    return parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
    return parseFloat(a) - parseFloat(b);
}

function multiply(a, b) {
    return parseFloat(a) * parseFloat(b);
}

function divide(a, b) {
    return parseFloat(a) / parseFloat(b);
}

function numberFromArr(arr) {
    if(arr.length >= 1 && arr.length <= 10){
        return arr.reduce((a, b) => `${a}${b}`);
    } else {
        resArr = [];
        return 0;
    }
}

function operate() {
    secondNumber = numberFromArr(resArr);
    if(plusClicked) {
        result = add(firstNumber, secondNumber);
        res.textContent = result;
        plusClicked = 0;
        pointAdded = 0;
        upperText.textContent += ` + ${secondNumber}`;
        resArr = [];
    } else if (subtractClicked) {
        result = subtract(firstNumber, secondNumber);
        res.textContent = result;
        subtractClicked = 0;
        pointAdded = 0;
        upperText.textContent += ` - ${secondNumber}`;
        resArr = [];
    } else if (multiplyClicked) {
        result = multiply(firstNumber, secondNumber);
        res.textContent = result;
        multiplyClicked = 0;
        pointAdded = 0;
        upperText.textContent += ` * ${secondNumber}`;
        resArr = [];
    } else if (divideClicked && secondNumber == 0) {
        res.textContent = "Nice try";
        upperText.textContent = "Not really"
        divideClicked = 0;
        resArr = [];
        firstNumber = 0;
        secondNumber = 0;
        pointAdded = 0;
    } else if (divideClicked && secondNumber != 0) {
        result = divide(firstNumber, secondNumber);
        res.textContent = result;
        divideClicked = 0;
        pointAdded = 0;
        upperText.textContent += ` / ${secondNumber}`;
        resArr = [];
    }
}

numButtons.forEach((button) =>{
    button.onclick = () => {
        resArr.push(button.id);
        res.textContent = " ";
        res.textContent = numberFromArr(resArr);
    }
});

pointButton.onclick = () => {
    if(pointAdded === 0){
        resArr.push(".");
        pointAdded = 1;
    }
}

delButton.onclick = () => {
    resArr = [];
    res.textContent = 0;
    firstNumber = 0;
    secondNumber = 0;
    result = 0;
    pointAdded = 0;
    upperText.textContent = "";
}

clearButton.onclick = () => {
    resArr.pop()
    res.textContent = numberFromArr(resArr);
}

plusButton.onclick = () => {
    if(result == 0){
        plusClicked = 1;
        firstNumber = numberFromArr(resArr);
        resArr = [];
        res.textContent = 0;
        upperText.textContent = firstNumber;
        pointAdded = 0;
    } else {
        plusClicked = 1;
        firstNumber = result;
        res.textContent = 0;
        upperText.textContent = firstNumber;
        result = 0;
        resArr = [];
        pointAdded = 0;
    }
}

subtractButton.onclick = () => {
    if(result == 0){
        subtractClicked = 1;
        firstNumber = numberFromArr(resArr);
        resArr = [];
        res.textContent = 0;
        upperText.textContent = firstNumber;
        pointAdded = 0;
    } else {
        subtractClicked = 1;
        firstNumber = result;
        res.textContent = 0;
        upperText.textContent = firstNumber;
        result = 0;
        resArr = [];
        pointAdded = 0;
    }
}

multiplyButton.onclick = () => {
    if(result == 0){
        multiplyClicked = 1;
        firstNumber = numberFromArr(resArr);
        resArr = [];
        res.textContent = 0;
        upperText.textContent = firstNumber;
        pointAdded = 0;
    } else {
        multiplyClicked = 1;
        firstNumber = result;
        res.textContent = 0;
        upperText.textContent = firstNumber;
        result = 0;
        resArr = [];
        pointAdded = 0;
    }
}

divideButton.onclick = () => {
    if(result == 0){
        divideClicked = 1;
        firstNumber = numberFromArr(resArr);
        resArr = [];
        res.textContent = 0;
        upperText.textContent = firstNumber;
        pointAdded = 0;
    } else {
        divideClicked = 1;
        firstNumber = result;
        res.textContent = 0;
        upperText.textContent = firstNumber;
        result = 0;
        resArr = [];
        pointAdded = 0;
    }
}

equalButton.onclick = () => {
    if(resArr.length != 0){
        operate();
        resArr = [];
    }
}