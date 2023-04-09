const currentNumber = document.querySelector('.currentNumber')
const previousNumber = document.querySelector('.previousNumber p');
const mathSign = document.querySelector('.mathSign');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear')

let result = '';

function displayNumbers() {
    if (this.textContent === '.' && currentNumber.innerHTML.includes('.')) return;
    if (this.textContent === '.' && currentNumber.innerHTML === '') return currentNumber.innerHTML = '0.';

    currentNumber.innerHTML += this.textContent;
}

function operate() {
    if (currentNumber.innerHTML === '' & this.textContent === '-') {
        currentNumber.innerHTML = '-';
        return;
    }

    else if (currentNumber.innerHTML === '') {
        return;
    }

    if (mathSign.innerHTML !== '') {
        showResult();
    }
    previousNumber.innerHTML = currentNumber.innerHTML;
    mathSign.innerHTML = this.textContent;
    currentNumber.innerHTML = '';
}

function showResult() {
    if (previousNumber.innerHTML === '' || currentNumber.innerHTML === '') return;

    let x = Number(currentNumber.innerHTML);
    let y = Number(previousNumber.innerHTML);
    let opr = mathSign.innerHTML;

    switch (opr) {
        case '+':
            result = x + y;
            break;

        case '-':
            result = y - x;
            break;
            
        case '*':
            result = x * y;
            break;
        
        case '/':
            result = y / x;
            break;
        
        case 'x^':
            result = y ** x;
            break;
    }

    currentNumber.innerHTML = result;
    previousNumber.innerHTML = 
    mathSign.innerHTML = '';
}

function clearScreen() {
    result = '';
    currentNumber.innerHTML = '';
    mathSign.innerHTML = '';
    previousNumber.innerHTML = '';
}

operatorButtons.forEach((button) => button.addEventListener('click', operate));
equalsButton.addEventListener('click', showResult);
clearButton.addEventListener('click', clearScreen);
numberButtons.forEach((button) => {
    button.addEventListener('click', displayNumbers)
});