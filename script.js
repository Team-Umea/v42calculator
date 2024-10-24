// alert("Hej det här är en avancerad kalkylator");
let menuInTextFormat = "";
let menuIndex = 1;
let menu;

const vaildMenuChoices = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const menuOptions = ["Addition av två tal", "Subtraktion av två tal", "Multiplikation av två tal", "Division av två tal", "Modulus av två tal", "Procent beräkning av två tal", "Exponentiering av två tal", "Trigonometri av två tal", "Logaritmera av två tal", "Visa senaste uträkningar", "Avsluta program"];

for (const option of menuOptions) {
  menuInTextFormat += `${menuIndex}. ${option} ${menuIndex < menuOptions.length ? "\n" : ""}`;
  menuIndex++;
}

showMenu();

switch (menu) {
  case 1:
    let returnToMenu = false;
    do {
      let num1;
      let num2;
      let sum;
      do {
        num1 = parseFloat(prompt("Ange det första talet du vill addera:"));
      } while (isNaN(num1));
      do {
        num2 = parseFloat(prompt("Ange det andra talet du vill addera:"));
      } while (isNaN(num2));

      sum = num1 + num2;

      if (prompt(`${num1} + ${num2} = ${sum}\n\n Vill du gå tillbaka till menyn (ja/nej)`).trim().toLowerCase() === "ja") {
        returnToMenu = true;
      }
    } while (!returnToMenu);
    break;
  case 2:
    break;
  case 3:
    break;
  case 4:
    break;
  case 5:
    break;
  case 6:
    break;
  case 7:
    break;
  case 8:
    break;
  case 9:
    break;
}

function showMenu() {
  menu = null;
  do {
    menu = Number(prompt(`Välj ett alterntiv nedan genom att ange siffran som motsvarar det alternativet (du kan bara välja 1-9) \n\n${menuInTextFormat}`));
  } while (isNaN(menu) || !vaildMenuChoices.includes(menu));
}

function promptToNumber(promptMessage) {
  let num;
  do {
    num = Number(prompt(promptMessage));
  } while (isNaN(num));
  return num;
}

// function handleAddition() {
//     let j = 0;

// }

function addNumbers(num1, num2) {
  return num1 + num2;
}
function subtractNumbers(num1, num2) {
  return num1 - num2;
}
function multiplyNumbers(num1, num2) {
  return num1 * num2;
}
function divideNumbers(num1, num2) {
  return num1 / num2;
}
function modulusNumbers(num1, num2) {
  return num1 % num2;
}
function powerNumbers(num1, num2) {
  return num1 ** num2;
}
