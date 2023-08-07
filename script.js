let displayValue = '0';
let operator = null;
let prevValue = 0;


//VALUE
function updateDisplay() {
  const display = document.getElementById('value');
  if (operator !== null) {
    display.innerText = prevValue + ' ' + operator + ' ' + displayValue;
  } else {
    display.innerText = displayValue;
  }
}

//VALUR DISPLAY
function appendToDisplay(digit) {
  if (displayValue === '0') {
    displayValue = digit;
  } else {
    displayValue += digit;
  }
  updateDisplay();
}

//C and AC
function clearDisplay() {
  displayValue = '0';
  operator = null;
  prevValue = 0;
  updateDisplay();
}

//DEL
function deleteLast() {
  if (displayValue.length > 1) {
    displayValue = displayValue.slice(0, -1);
  } else {
    displayValue = '0';
  }
  updateDisplay();
}

//E
function appendConstant(constant) {
  displayValue = 2.718;
  updateDisplay();
}

//SQRT
function performSquareRoot() {
  const currentValue = parseFloat(displayValue);
  if (currentValue >= 0) {
    displayValue = Math.sqrt(currentValue).toString();
    recentCalculation = `√${currentValue}`;
  } else {
    displayValue = 'Error';
    recentCalculation = '';
  }
  updateDisplay();
}


//SQUARE
function performSquare() {
  const currentValue = parseFloat(displayValue);
  displayValue = (currentValue * currentValue).toString();
  recentCalculation = `(${currentValue})^2`;
  updateDisplay();
}


//PII
function appendPii(Pii) {
  displayValue = 3.14;
updateDisplay();
}

//DECIMAL
function appendDecimal(decimal) {
  if (!displayValue.includes(decimal)) {
    displayValue += decimal;
    updateDisplay();
  }
}


function performOperation(op) {
  if (operator !== null) {
    calculate();
  }
  operator = op;
  prevValue = parseFloat(displayValue);
  displayValue = '0';
}

//add, subtract, multip, division
function calculate() {
  const currentValue = parseFloat(displayValue);
  let result = prevValue;

  switch (operator) {
    case '+':
      result += currentValue;
      break;
    case '-':
      result -= currentValue;
      break;
    case 'x':
      result *= currentValue;
      break;
    case '÷':
      result /= currentValue;
      break;
    default:
      return;
  }

  displayValue = result.toString();
  operator = null;
  updateDisplay();
}



updateDisplay();
