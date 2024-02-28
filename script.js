function appendToDisplay(value) {
  let display = document.getElementById('ds');
  let currentValue = display.value;
  //   console.log(currentValue);

  // Check if the last character is an operator
  let lastChar = currentValue[currentValue.length - 1];
  if (
    ['+', '-', '*', '/'].includes(lastChar) &&
    ['+', '-', '*', '/'].includes(value)
  ) {
    // Replace the last operator with the new one
    display.value = currentValue.slice(0, -1) + value;
  } else {
    // Append the value to the display
    display.value += value;
  }
}

function clearDisplay() {
  document.querySelector('#ds').value = '';
}

function calculateResult() {
  let result;
  try {
    result = eval(document.getElementById('ds').value);
  } catch (error) {
    result = 'Error';
  }
  document.getElementById('ds').value = result;
}
