const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let operator = '';
let firstOperand = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (!isNaN(value)) {
      currentInput += value;
      display.value = currentInput;
    } else if (value === 'C') {
      currentInput = '';
      operator = '';
      firstOperand = '';
      display.value = '';
    } else if (value === '+' || value === '-') {
      operator = value;
      firstOperand = currentInput;
      currentInput = '';
    } else if (value === '=') {
      if (operator && firstOperand !== '' && currentInput !== '') {
        const result = eval(`${firstOperand} ${operator} ${currentInput}`);
        display.value = result;
        currentInput = result.toString();
        operator = '';
        firstOperand = '';
      }
    }
  });
});
