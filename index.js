let button = document.querySelector("button")
let inputR = document.getElementById("r")
let inputG = document.getElementById("g")
let inputB = document.getElementById("b")
let displayResult = document.getElementById("result")


function calculate(val) {
  let result = Math.floor(val / 16);
  if (result < 10) {
      return result;
  } else if (result == 10) {
      return 'A';
  } else if (result == 11) {
      return 'B';
  } else if (result == 12) {
      return 'C';
  } else if (result == 13) {
      return 'D';
  } else if (result == 14) {
      return 'E';
  } else if (result == 15) {
      return 'F';
  }
}

function calculateRem(val) {
  // let result = Math.floor(val / 16);
  // let remainder = (val - result * 16);
  let remainder = val % 16
  if (remainder < 10) {
      return remainder;
  } else if (remainder == 10) {
      return 'A';
  } else if (remainder == 11) {
      return 'B';
  } else if (remainder == 12) {
      return 'C';
  } else if (remainder == 13) {
      return 'D';
  } else if (remainder == 14) {
      return 'E';
  } else if (remainder == 15) {
      return 'F';
  }
}

button.addEventListener('click', () => {
  displayResult.innerHTML = '#' + 
      calculate(inputR.value).toString() + 
      calculateRem(inputR.value).toString() + 
      calculate(inputG.value).toString() + 
      calculateRem(inputG.value).toString() + 
      calculate(inputB.value).toString() + 
      calculateRem(inputB.value).toString();
});