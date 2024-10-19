//!Advanced
const display = document.querySelector(".display");
const buttonsAdd = document.querySelectorAll(".btn-add");
const equals = document.querySelector(".btn-equals");
const del = document.querySelector(".btn-delete");
const allClear = document.querySelector(".btn-allClear");
const calc = document.querySelector(".calculator");

// const tokens = ["+","-","/","*",".","^","%"];

const tokens = ["^","*","","/","%","+","-","."];


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
(lastChar==="("&&newChar===")")) {
    display.value = currentValue.slice(0, -1); 
  }
}

function addToScreen(input) {
  const newChar = input; 
  const lastChar = display.value.slice(-1);
  if ((!tokens.includes(newChar) || (!tokens.includes(lastChar) && tokens.includes(newChar)))) {
    if(!(lastChar==="("&&newChar==")")){
      display.value += newChar;
    }
  }
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

function flatParentheses() {
  let result = display.value;
  while (result.includes("((")) {
    result = result.replace("((", "(");
  }
  // while (result.includes("))")) {
  //   result = result.replace("))", ")");
  // }
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

function extractParentheses(strToCalc){
  let substring="";
  let lp = 0; 
  let rp = 0; 
  let foundLp = 0; 
  let foundRp = 0; 
  let addToSub = false; 
  for(let i=0; i<strToCalc.length;i++){
    const ch = strToCalc[i];
    if(ch==="("){
      lp++; 
    }else if(ch===")"){
      rp++; 
    }
  }

  for(let i=0; i<strToCalc.length;i++){
    const ch = strToCalc[i];
    if(ch==="("){
      foundLp++; 
    }else if(ch===")"){
      foundRp++; 
    }
    if(foundLp===lp){
      addToSub=true; 
    }
    if(!isNumeric(ch)&&ch!=="."&&!tokens.includes(ch)){
      addToSub=false;
    }
    if(addToSub){
      substring+=ch; 
    }
  }
  return strToCalc.replace(`(${substring})`,cal(substring))
}

function matchReg(sub){
    const regex = new RegExp(`(\\d+|[\\${tokens.join('\\')}]|\.)`, 'g');
    let result = sub.match(regex);
    return result;
}

function cal(str) {
  const arr = matchReg(str);

  const precedenceGroups = [
    ["^"],               
    ["*", "/", "%"],    
    ["+", "-"]            
  ];

  for (let group of precedenceGroups) {
    let i = 0;
    while (i < arr.length) {
      if (group.includes(arr[i])) {
        let num1 = parseFloat(arr[i - 1]);
        let num2 = parseFloat(arr[i + 1]);
        let result = calculate[arr[i]](num1, num2); 
        arr.splice(i - 1, 3, result.toString()); 
        i--;
      } else {
        i++;
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