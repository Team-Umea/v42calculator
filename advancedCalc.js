//!Advanced calculator
const display = document.querySelector(".display");
const buttonsAdd = document.querySelectorAll(".btn-add");
const equals = document.querySelector(".btn-equals");
const del = document.querySelector(".btn-delete");
const allClear = document.querySelector(".btn-allClear");
const calc = document.querySelector(".calculator");

const tokens = ["^", "*", "/", "%", "+", "-", "."];

buttonsAdd.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    addToScreen(btn.textContent);
    display.focus();
  });
});

del.addEventListener("click", function (e) {
  if (display.value.length > 0) {
    deleteChar();
  }
});

allClear.addEventListener("click", function (e) {
  ac();
});

equals.addEventListener("click", function (e) {
  solve(display.value);
  calc.classList.add("animate__rubberBand");
});

document.addEventListener("keyup", function (e) {
  if (e.code === "Enter") {
    solve(display.value);
    calc.classList.add("animate__rubberBand");
  }
});

display.addEventListener("input", function (e) {
  checkInput();
});

setInterval(() => {
  calc.classList.remove("animate__rubberBand");
}, 2000);

function checkInput() {
  const newChar = display.value.slice(-1);
  const lastChar = display.value.slice(-2, -1);

  if (!(!tokens.includes(newChar) || (!tokens.includes(lastChar) && tokens.includes(newChar))) || (!isNumeric(newChar) && !tokens.includes(newChar) && newChar !== "(" && newChar !== ")")) {
    display.value = display.value.slice(0, -1);
  }
  display.value = removeInitalOperator(display.value);
  display.value = blockParentheseAfterDot(display.value);
  display.value = insertOperator(display.value);
}

function addToScreen(input) {
  const newChar = input;
  const lastChar = display.value.slice(-1);
  if (!tokens.includes(newChar) || (!tokens.includes(lastChar) && tokens.includes(newChar))) {
    if (!(lastChar === "(" && newChar == ")")) {
      display.value += newChar;
      display.value = removeInitalOperator(display.value);
      display.value = insertOperator(display.value);
    }
  }
  display.value = blockParentheseAfterDot(display.value);
}

function solve(num) {
  // if(num !== ""){
  //   try {
  //     display.value = math.evaluate(num);
  //   } catch (error) {
  //     display.value = error;
  //   }
  // }
  if (num !== "") {
    const finalCalcNoParentheses = eval(num.replace(/\^/g, "**"));
    display.value = finalCalcNoParentheses;
  }
}

function removeInitalOperator(str) {
  const firstChar = str.charAt(0);
  let newStr = str;
  if (str.length === 1 && tokens.includes(firstChar)) {
    if (firstChar === ".") {
      newStr = "0.";
    } else {
      newStr = "";
    }
  }
  return newStr;
}

function blockParentheseAfterDot(str) {
  let newStr = str;
  if (str.length > 2) {
    const newChar = str.slice(-1);
    const dot = str.charAt(str.length - 2);
    if (dot === "." && (newChar === "(" || newChar === ")")) {
      newStr = str.slice(0, -1);
      console.log(newStr);
    }
  }
  return newStr;
}

function insertOperator(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    let currentChar = str.charAt(i);
    let nextChar = str.charAt(i + 1);
    if (isNumeric(currentChar) && nextChar === "(") {
      newStr = newStr.concat(currentChar, "*");
    } else {
      newStr = newStr.concat(currentChar);
    }
  }

  return newStr;
}

function isNumeric(str) {
  return /^\d+$/.test(str);
}

function ac() {
  display.value = "";
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}
