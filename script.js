let a = 0;
let b = 0;
let operator = "";
let result = null
const display = document.getElementById('display')

function clearDisplay () {
    display.textContent = ""
    a = null;
    b = null;
    operator = "";
    result = null
}

function addToDisplay (input) {
    
    if (result != null) {
        clearDisplay();
    }
    display.textContent += input
}

function operatorChoice (chosenOperator){
    if (display.textContent === "") {
        operator = chosenOperator;
        return;
    }
    if (result != null) {
        a = result;
        result = null
    }
    if (operator && a !== null && display.textContent !== "") {
        b = display.textContent;
        result = operate(operator, parseFloat(a), parseFloat(b));
        if (typeof result === "number" && !Number.isInteger(result)) {
            result = parseFloat(result.toFixed(4));
//   some digit function thing
        }
        display.textContent = result;
        a = result;
    } else if (display.textContent !== ""){
        a = display.textContent;
    }
    operator = chosenOperator;
    display.textContent = "";
}

function calc () {
    if (a === null || !operator) return;
    if (display.textContent === "") {
        b = a;
    } else {
        b = display.textContent
    }
    result = operate(operator, parseFloat(a), parseFloat(b))
    if (typeof result === "number" && !Number.isInteger(result)) {
        result = parseFloat(result.toFixed(4));
    }
    display.textContent = result
    a = result
    b = null;
    operator = "";
}


function operate (operator, a, b) {
    if (operator == '+'){
        return add(a, b)
    } else if (operator == '-'){
        return subtract(a, b)
    } else if (operator == '*'){
        return multiply(a, b)
    } else if (operator == '/'){
        return divide(a, b)
    }
};



function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a/b
}

