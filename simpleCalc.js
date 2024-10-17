//!Simple calculator
let falsyInputNum1 = 0;
let promptNum1 = "Enter the first number: ";
let num1;

let falsyInputNum2 = 0;
let promptNum2 = "Enter the second number: ";
let num2;

let operator = "";
let falsyOperator = 0;
let operatorPrompt = "Chose a operation to perform (+-*/%): ";

let result;

alert("This calculator works by accepting 2 numbers as integers or decimal numbers and performs an operation of choice, use . not , for decimal numbers");
console.log("This calculator works by accepting 2 numbers as integers or decimal numbers and performs an operation of choice, use . not , for decimal numbers");

do {
  if (falsyInputNum1 > 0) {
    promptNum1 = "Try again, it must be a number: ";
  }
  num1 = parseFloat(prompt(promptNum1));
  falsyInputNum1++;
} while (isNaN(num1));

do {
  if (falsyInputNum2 > 0) {
    promptNum2 = "Try again, it must be a number: ";
  }
  num2 = parseFloat(prompt(promptNum2));
  falsyInputNum2++;
} while (isNaN(num2));

do {
  if (falsyOperator > 0) {
    operatorPrompt = "Try again and chose a valid operator (+-*/%):";
  }
  falsyOperator++;
  operator = prompt(operatorPrompt);
} while (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/" && operator !== "%");

switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    if (num2 !== 0) {
      result = num1 / num2;
    } else {
      alert("Error cant divide with 0");
      console.log("Error cant divide with 0");
    }
    break;
  case "%":
    result = num1 % num2;
    break;
}

alert(`Result: ${result}`);
console.log(`Result: ${result}`);
