//!Advanced calculator
const display = document.querySelector(".display");
const buttonsAdd = document.querySelectorAll(".btn-add");
const equals = document.querySelector(".btn-equals");
const del = document.querySelector(".btn-delete");
const allClear = document.querySelector(".btn-allClear");
const calc = document.querySelector(".calculator");

const tokens = ["^", "*", "/", "%", "+", "-", "."];
const operatorMap = {
  "+": (num1, num2) => num1 + num2,
  "-": (num1, num2) => num1 - num2,
  "*": (num1, num2) => num1 * num2,
  "/": (num1, num2) => num1 / num2,
  "%": (num1, num2) => num1 % num2,
  "^": (base, exp) => Math.pow(base, exp),
};

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
}, 1000);

function checkInput() {
  let output = display.value;
  const newChar = output.slice(-1);
  const lastChar = output.slice(-2, -1);

  if (!(!tokens.includes(newChar) || (!tokens.includes(lastChar) && tokens.includes(newChar))) || (lastChar === "(" && newChar === ")") || (!isNumeric(newChar) && !tokens.includes(newChar) && newChar !== "(" && newChar === ")")) {
    output = output.slice(0, -1);
  }
  output = removeInitalOperator(output);
  output = blockParentheseAfterDot(output);
  output = insertOperator(output);
}

function addToScreen(input) {
  let output = display.value;
  const newChar = input;
  const lastChar = output.slice(-1);
  if (!tokens.includes(newChar) || (!tokens.includes(lastChar) && tokens.includes(newChar))) {
    if (!(lastChar === "(" && newChar == ")")) {
      output += newChar;
      output = removeInitalOperator(output);
      output = insertOperator(output);
    }
  }
  output = blockParentheseAfterDot(output);
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
    let solved = flatParentheses(num);
    do {
      solved = extractParentheses(solved);
    } while (solved.includes("("));

    const finalCalcNoParentheses = calculate(solved);
    display.value = finalCalcNoParentheses;
  }
}

function calculate(str) {
  const arr = matchReg(str);

  for (let i = 0; i < tokens.length - 1; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === tokens[i]) {
        let num1 = parseFloat(arr[j - 1]);
        let num2 = parseFloat(arr[j + 1]);
        if (operatorMap[arr[j]]) {
          let result = operatorMap[arr[j]](num1, num2);
          arr.splice(j - 1, 3, result.toString());
          j--;
        }
      }
    }
  }

  return parseFloat(arr[0]);
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

function flatParentheses() {
  let result = display.value;
  while (result.includes("((")) {
    result = result.replace("((", "(");
  }
  return result;
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

function extractParentheses(strToCalc) {
  let substring = "";
  let startIndex = strToCalc.lastIndexOf("(");

  if (startIndex !== -1) {
    let endIndex = strToCalc.indexOf(")", startIndex);

    if (endIndex !== -1) {
      substring = strToCalc.slice(startIndex + 1, endIndex);
      let result = calculate(substring);
      if (startIndex > 0 && strToCalc[startIndex - 1] === "-") {
        result = -result;
        strToCalc = strToCalc.slice(0, startIndex - 1) + result + strToCalc.slice(endIndex + 1);
      } else {
        strToCalc = strToCalc.slice(0, startIndex) + result + strToCalc.slice(endIndex + 1);
      }
    }
  }

  return strToCalc;
}

function matchReg(sub) {
  const regex = new RegExp(`(\\d*\\.?\\d+|[\\${tokens.join("\\")}]|\\.)`, "g");
  let result = sub.match(regex);
  return result;
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
