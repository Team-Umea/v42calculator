//!Advanced
const display = document.querySelector(".display");
const buttonsAdd = document.querySelectorAll(".btn-add");
const equals = document.querySelector(".btn-equals");
const del = document.querySelector(".btn-delete");
const allClear = document.querySelector(".btn-allClear");
const calc = document.querySelector(".calculator");

const tokens = ["+","-","/","*",".","^"];

function isNumeric(str){
  return /^\d+$/.test(str);
}

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
  if(num !== ""){
    try {
      display.value = math.evaluate(num);
    } catch (error) {
      display.value = error;
    }
  }
}

function ac() {
  display.value = "";
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}