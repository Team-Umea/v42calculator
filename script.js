// alert("Hej det här är en avancerad kalkylator");
let menuInTextFormat = "";
let menuIndex = 1;
let menu;

const vaildMenuChoices = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const menuOptions = {
  option1: "Addition",
  option2: "Subtraktion",
  option3: "Multiplikation",
  option4: "Modulus",
  option5: "Exponentiering",
  option6: "Trigonometri",
  option7: "Logaritmera",
  option8: "Visa senaste uträkningar",
  option9: "Avsluta program",
};

for (const option of Object.values(menuOptions)) {
  menuInTextFormat += `${menuIndex}. ${option}\n`;
  menuIndex++;
}

showMenu();

switch (menu) {
  case 1:
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
