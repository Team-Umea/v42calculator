//!Advanced
const display = document.querySelector(".display");
const button = document.getElementById("btn-1");

const operators = document.querySelectorAll(".btn-operator");
const numbers = document.querySelectorAll(".btn-numbers");

const equals = document.querySelector(".btn-equals");

operators.forEach((operator) => {
  operator.addEventListener("click", function (e) {
    addToScreen(operator.textContent);
  });
});

numbers.forEach((number) => {
  number.addEventListener("click", function (e) {
    addToScreen(number.textContent);
  });
});

function addToScreen(input) {
  display.value += input;
}

function equals() {
  let num1 = document.querySelector(".display").value;
  let num2 = math.evaluate(num1);
  display.value = num2;
}

function ac() {
  display.value = "";
}
