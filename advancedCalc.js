//!Advanced
const display = document.querySelector(".display");
const buttonsAdd = document.querySelectorAll(".btn-add");
const equals = document.querySelector(".btn-equals");
const del = document.querySelector(".btn-delete");
const allClear = document.querySelector(".btn-allClear");

let pressed = false;

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


/* Enter & Solve functions*/
equals.addEventListener("click", function (e) {
  solve(display.value);
});

document.addEventListener("keyup", function (e) {
  if (e.code === "Enter") {
    solve(display.value);
  }
});

function addToScreen(input) {
  display.value += input;
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
