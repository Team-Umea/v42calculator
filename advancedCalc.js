//!Advanced
const display = document.querySelector(".display");
const buttonsAdd = document.querySelectorAll(".btn-add");
const equals = document.querySelector(".btn-equals");
const del = document.querySelector(".btn-delete");
const allClear = document.querySelector(".btn-allClear");
const calc = document.querySelector(".calculator");

const tokens = ["^","*","/","%","+","-","."];


buttonsAdd.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    addToScreen(btn.textContent);
    display.focus();
    calc.classList.remove("animate__rubberBand")
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
  calc.classList.add("animate__rubberBand")
});


document.addEventListener("keyup", function (e) {
  if (e.code === "Enter") {
    solve(display.value);
    calc.classList.add("animate__rubberBand")
  }
});

display.addEventListener("input", function(e) {
  checkInput();
});

function checkInput(){
  let currentValue = display.value;
  const newChar = currentValue.slice(-1);
  const lastChar = currentValue.slice(-2, -1);

  if ((!(!tokens.includes(newChar) || (!tokens.includes(lastChar) && tokens.includes(newChar))))||
      (lastChar==="("&&newChar===")")||
      (!isNumeric(newChar)&&!tokens.includes(newChar)&&newChar!=="("&&newChar===")")) {
    display.value = currentValue.slice(0, -1); 
  }
  display.value = removeInitalOperator(display.value);
  display.value = blockParentheseAfterDot(display.value); 
  display.value = insertOpeBeforeParenthese(display.value); 
}

function addToScreen(input) {
  const newChar = input; 
  const lastChar = display.value.slice(-1);
  if ((!tokens.includes(newChar) || (!tokens.includes(lastChar) && tokens.includes(newChar)))) {
    if(!(lastChar==="("&&newChar==")")){
      display.value += newChar;
      display.value = removeInitalOperator(display.value); 
      display.value = insertOpeBeforeParenthese(display.value); 
    }
  }
  display.value = blockParentheseAfterDot(display.value);
}

function removeInitalOperator(str){
  const firstChar = str.charAt(0);
  let newStr = str; 
  if(str.length===1&&tokens.includes(firstChar)){
    if(firstChar==="."){
      newStr="0."
    }else{
      newStr="";
    }
  }
  return newStr; 
}

function solve(num) {
  // if(num !== ""){
  //   try {
  //     display.value = math.evaluate(num);
  //   } catch (error) {
  //     display.value = error;
  //   }
  // }
  let solved = flatParentheses(num); 
  do{
    solved=extractParentheses(solved);
  }while(solved.includes("("));

  const finalCalcNoParentheses = cal(solved);
  display.value = finalCalcNoParentheses;
}

/*
*TODO: Add "*" before parenthese if ex. 2(2-7)
*Swith operator "+" in parenthese if "-" sits before parenthese
*Block input of none numeric or operators characters - DONE
*Remove operator if it a index 0 of display value unless it is a dot then insert a 0 - DONE 
*/

function blockParentheseAfterDot(str){
  let newStr = str
  if(str.length > 2){
  const newChar = str.slice(-1); 
  const dot = str.charAt(str.length-2); 
    if(dot === "." &&(newChar==="("||newChar===")")){
      newStr = str.slice(0,-1); 
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

const calculate = {
  "+":(num1,num2)=>num1+num2,
  "-":(num1,num2)=>num1-num2,
  "*":(num1,num2)=>num1*num2,
  "/":(num1,num2)=>num1/num2,
  "%":(num1,num2)=>num1%num2,
  "^":(base,exp)=>Math.pow(base,exp)
}

function insertOpeBeforeParenthese(str) {
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

function extractParentheses(strToCalc){
  let substring = "";
  let startIndex = strToCalc.lastIndexOf("("); 
  if (startIndex !== -1) {
    let endIndex = strToCalc.indexOf(")", startIndex); 
    if (endIndex !== -1) {
      substring = strToCalc.slice(startIndex + 1, endIndex); 
      let result = cal(substring); 
      return strToCalc.slice(0, startIndex) + result + strToCalc.slice(endIndex + 1); 
    }
  }
  return strToCalc; 
}


function matchReg(sub) {
  const regex = new RegExp(`(\\d*\\.?\\d+|[\\${tokens.join('\\')}]|\\.)`, 'g');
  let result = sub.match(regex);
  return result;
}

//3-(6-0.5*(2-0.5))/2

function cal(str) {
  const arr = matchReg(str); 

  for (let i = 0; i < tokens.length - 1; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === tokens[i]) {
        let num1 = parseFloat(arr[j - 1]);
        let num2 = parseFloat(arr[j + 1]);
        if (calculate[arr[j]]) {
          let result = calculate[arr[j]](num1, num2); 
          arr.splice(j - 1, 3, result.toString()); 
          j--; 
        }
      }
    }
  }

  return parseFloat(arr[0]);
}

function isNumeric(str){
  return /^\d+$/.test(str);
}

function ac() {
  display.value = "";
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}