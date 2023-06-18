let firstNumber = "";
let secondNumber = "";
let operator = "";
let currentOperation = null
const display = document.querySelector('#display');
const numberBtn = document.querySelectorAll('[data-number]');
const operatorBtn = document.querySelectorAll('[data-operator]');
const decimalBtn = document.getElementById('decimal');
const clearBtn = document.getElementById('clear');
const equals = document.getElementById('equals');
const lastDisplay = document.getElementById('lastDisplay');
const backspace = document.getElementById('backspace');

clearBtn.addEventListener('click', clear);
equals.addEventListener('click', evaluate);
backspace.addEventListener('click', back);
decimalBtn.addEventListener('click', decimalPoint);

numberBtn.forEach((button) => {
    button.addEventListener('click', () => {
        let firstNumber = display.textContent += button.value;
    })
})

operatorBtn.forEach((button) =>
button.addEventListener('click', () => setOperator(button.textContent))
);

function decimalPoint() {
    if (display.textContent.includes('.')) return;
    display.textContent += '.';
}

function setOperator(operator) {
    if (currentOperation !== null) evaluate();
    firstNumber = display.textContent;
    currentOperation = operator;
    lastDisplay.textContent = `${firstNumber} ${currentOperation} `;
    display.textContent = "";
}

function evaluate() {
    if (currentOperation === '/' && display.textContent === '0') {
        alert("You cannot divide by 0! Clearing calculator!");
        clear();
        return;
    }
    if (currentOperation === null) return;
    secondNumber = display.textContent
    display.textContent = rounding(operate(firstNumber, currentOperation, secondNumber));
    lastDisplay.textContent = `${firstNumber} ${currentOperation} ${secondNumber} =`
}

function clear() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    display.textContent = "0"
    lastDisplay.textContent = ""
    currentOperation = null
};

function back() {
    display.textContent = display.textContent.toString().slice(0, -1);
}

function rounding(number) {
    return Math.round(number * 1000) / 1000
}

function add (firstNumber, secondNumber) {
    return firstNumber + secondNumber
};

function subtract (firstNumber, secondNumber) {
    return firstNumber - secondNumber
};

function multiply (firstNumber, secondNumber) {
    return firstNumber * secondNumber
};

function divide (firstNumber, secondNumber) {
    return firstNumber / secondNumber
};

function operate (firstNumber, operator, secondNumber) {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    if (operator === "+") {
        return add(firstNumber, secondNumber)
    } else if (operator === "-") {
        return subtract(firstNumber, secondNumber)
    } else if (operator === "*") {
        return multiply(firstNumber, secondNumber)
    } else if (operator === "/") {
        return divide(firstNumber, secondNumber)
    }
}





