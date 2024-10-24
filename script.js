// alert("Hej det här är en avancerad kalkylator");
let menuInTextFormat = "";
let menuIndex = 1;
let menuChoice;
let calculations = [];

const vaildMenuChoices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const menuOptions = ["Addition av två tal", "Subtraktion av två tal", "Multiplikation av två tal", "Division av två tal", "Modulus av två tal", "Procent beräkning av två tal", "Exponentiering av två tal", "Roten ur av två tal", "Trigonometri av två tal", "Logaritmera av två tal", "Beräkna en fibonacci sekvens", "Beräkna fakulet av ett tal", "Visa senaste uträkningar", "Avsluta program"];

for (const option of menuOptions) {
  menuInTextFormat += `${menuIndex}. ${option} ${menuIndex < menuOptions.length ? "\n" : ""}`;
  menuIndex++;
}

function showMenu() {
  menuChoice = null;
  do {
    menuChoice = Number(prompt(`Välj ett alterntiv nedan genom att ange siffran som motsvarar det alternativet (du kan bara välja 1-9) \n\n${menuInTextFormat}`));
  } while (isNaN(menuChoice) || !vaildMenuChoices.includes(menuChoice));
}

function returnToMenu(calculation) {
  return prompt(`${calculation}\n\n Vill du gå tillbaka till menyn (ja/nej)`).trim().toLowerCase() === "ja" ? true : false;
}

function promptToNumber(promptMessage) {
  let num;
  do {
    num = Number(prompt(promptMessage));
  } while (isNaN(num));
  return num;
}

function promptToNumberNoZero(promptMessage) {
  let num;
  do {
    num = Number(prompt(promptMessage));
  } while (isNaN(num) || num === 0);
  return num;
}

function onlyPostiveNumber(message) {
  let num;
  do {
    num = Number(prompt(message));
  } while (num < 0 || isNaN(num));
  return num;
}

function promptToTrigonometric() {
  let trigFunction;

  do {
    trigFunction = prompt("Ange en trigonometriska funktion följt av antalet grader (cos90, sin10, tan270...) för att använda radianer istället för grader skriv 'rad' efter antalet grader (cos1rad, sin1.2rad, tan0.3rad...) ").trim().toLowerCase().replace(",", ".");
  } while (!(Boolean(extractNumber(trigFunction)) && (trigFunction.includes("tan") || trigFunction.includes("sin") || trigFunction.includes("cos"))) || !Boolean(extractNumber(trigFunction)));

  return trigFunction;
}

function extractTrigFunction(str) {
  return str.includes("tan") ? "tan" : str.includes("sin") ? "sin" : str.includes("cos") ? "cos" : "";
}

function extractNumber(str) {
  let number = "";
  let foundNumber = false;
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (!isNaN(ch)) {
      foundNumber = true;
    }
    if (foundNumber && isNaN(ch) && ch !== ".") {
      break;
    }
    if (!isNaN(ch) || ch === ".") {
      number += ch;
    }
  }
  console.log("Num: ", number);
  return parseFloat(number);
}

function storeCalculation(calculation, calculationAsText) {
  calculations.push({
    calculation: calculation,
    calculationAsText: calculationAsText,
  });
}

do {
  showMenu();

  switch (menuChoice) {
    case 1:
      while (true) {
        let num1 = promptToNumber("Ange det första talet du vill addera:");
        let num2 = promptToNumber("Ange det andra talet du vill addera:");
        let calculation = num1 + num2;
        let calculationAsText = `${num1} + ${num2} = ${calculation}`;
        storeCalculation(calculation, calculationAsText);
        if (returnToMenu(calculationAsText)) {
          break;
        }
      }
      break;
    case 2:
      while (true) {
        let num1 = promptToNumber("Ange det första talet du vill subtrahera:");
        let num2 = promptToNumber("Ange det andra talet du vill subtrahera:");
        let calculation = num1 - num2;
        let calculationAsText = `${num1} - ${num2} = ${calculation}`;
        storeCalculation(calculation, calculationAsText);
        if (returnToMenu(calculationAsText)) {
          break;
        }
      }
      break;
    case 3:
      while (true) {
        let num1 = promptToNumber("Ange det första talet du vill multiplicera:");
        let num2 = promptToNumber("Ange det andra talet du vill multiplicera:");
        let calculation = num1 * num2;
        let calculationAsText = `${num1} * ${num2} = ${calculation}`;
        storeCalculation(calculation, calculationAsText);
        if (returnToMenu(calculationAsText)) {
          break;
        }
      }
      break;
    case 4:
      while (true) {
        let num1 = promptToNumber("Ange det första talet du vill dividera:");
        let num2 = promptToNumberNoZero("Ange det andra talet du vill dividera (du kan inte dividera med 0):");
        let calculation = num1 / num2;
        let calculationAsText = `${num1} / ${num2} = ${calculation}`;
        storeCalculation(calculation, calculationAsText);
        if (returnToMenu(calculationAsText)) {
          break;
        }
      }
      break;
    case 5:
      while (true) {
        let num1 = promptToNumber("Ange det första talet du vill använda modulus på:");
        let num2 = promptToNumberNoZero("Ange det andra talet du vill använda modulus på (det får inte vara 0 när du använder modulus):");
        let calculation = num1 % num2;
        let calculationAsText = `${num1} % ${num2} = ${calculation}`;
        storeCalculation(calculation, calculationAsText);
        if (returnToMenu(calculationAsText)) {
          break;
        }
      }
      break;
    case 6:
      while (true) {
        let num1 = promptToNumber("Ange det värdet som du vill beräkna procent av som ett nummer:");
        let num2 = promptToNumber(`Hur många procent av ${num1} vill beräkna? Ange det procentuella värdet som ett nummer (ex. 10, 24, 76..)`);
        let calculation = num1 * num2 * 0.01;
        let calculationAsText = `${num2}% av ${num1} är ${calculation}`;
        storeCalculation(calculation, calculationAsText);
        if (returnToMenu(calculationAsText)) {
          break;
        }
      }
      break;
    case 7:
      while (true) {
        let num1 = promptToNumber("Ange basen av det talet du vill upphöja som ett nummer:");
        let num2 = promptToNumber("Ange exponenten av det talet du vill upphöja som ett nummer:");
        let calculation = num1 ** num2;
        let calculationAsText = `${num1} ^ ${num2} = ${calculation}`;
        storeCalculation(calculation, calculationAsText);
        if (returnToMenu(calculationAsText)) {
          break;
        }
      }
      break;
    case 8:
      while (true) {
        let num1 = promptToNumber("Ange vilket tal du vill ta roten ur på:");
        let num2 = promptToNumber("Ange vilken grad av rot du vill använda (ex. 2, 3, 4...)");
        let calculation = Math.pow(num1, 1 / num2);
        let calculationAsText = `${num2} √ ${num1} = ${calculation}`;
        storeCalculation(calculation, calculationAsText);
        if (returnToMenu(calculationAsText)) {
          break;
        }
      }
      break;
    case 9:
      while (true) {
        let trigonometricExp = promptToTrigonometric();
        let degOrRad = extractNumber(trigonometricExp);
        let trigonometricFunc = extractTrigFunction(trigonometricExp);
        let unit = trigonometricExp.includes("rad") ? "rad" : "deg";
        let angle = unit === "rad" ? degOrRad * (Math.PI / 180) : degOrRad;
        let calculation;
        switch (trigonometricFunc) {
          case "tan":
            calculation = Math.tan(angle);
            break;
          case "sin":
            calculation = Math.sin(angle);
            break;
          case "cos":
            calculation = Math.cos(angle);
            break;
        }

        let calculationAsText = `${trigonometricFunc.charAt(0).toUpperCase() + trigonometricFunc.slice(1)} of ${degOrRad}${unit === "rad" ? "π" : "°"} = ${calculation}`;
        storeCalculation(calculation, calculationAsText);
        if (returnToMenu(calculationAsText)) {
          break;
        }
      }
      break;
    case 10:
      while (true) {
        let num1 = promptToNumber("Ange basen för logaritmerisk beräkning (t.ex. 3):");
        let num2 = promptToNumber("Ange värdet som ska logaritmeras (t.ex. 9)");
        let calculation = Math.log(num2) / Math.log(num1);
        let calculationAsText = `log${num1}(${num2}) = ${calculation}`;
        storeCalculation(calculation, calculationAsText);
        if (returnToMenu(calculationAsText)) {
          break;
        }
      }
      break;
    case 11:
      while (true) {
        let num = promptToNumber("Ange anlatet värden som ska ingå i fibonacci sekvensen (ex. 5, 7, 30...)");
        let fib;
        let calculationAsText;
        if (num <= 1) {
          fib = "0";
        } else if (num === 2) {
          fib = "1, 2";
        } else {
          fib = [0, 1];
          for (let i = 2; i < num; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
          }
        }
        calculationAsText = `Fibonacci sekvensen med ${num} värden är: ${fib.toString()}`;
        storeCalculation(fib, calculationAsText);
        if (returnToMenu(calculationAsText)) {
          break;
        }
      }
      break;
    case 12:
      while (true) {
        let num = onlyPostiveNumber("Ange ett positivt heltal tal att räkna fakulet av (1 : 1, 2: 1*2 = 2, 3 : 1*2*3 = 6, 4 : 1*2*3*4 = 24)");
        let fak = 1;
        let calculationAsText = `Fakulet av ${num} är: `;
        for (let i = 1; i <= num; i++) {
          fak *= i;
          calculationAsText += i <= num - 1 ? `${i}*` : i;
        }
        calculationAsText += ` = ${fak}`;
        storeCalculation(fak, calculationAsText);
        if (returnToMenu(calculationAsText)) {
          break;
        }
      }
      break;
    case 13:
      let calculationsAsText = "Uförda beräkningar:\n\n";
      for (let i = 0; i < calculations.length; i++) {
        const calculation = calculations[i];
        calculationsAsText += `${i + 1}. ${calculation.calculationAsText} ${i < calculations.length - 1 ? "\n" : ""}`;
      }
      if (prompt(`${calculationsAsText}\n\nOm du vill avsluta programmet skriv (ja) annars tryck ok för att komma tillbaka till menyn`).trim().toLowerCase() === "ja" ? true : false) {
        menuChoice = 14;
      } else {
        break;
      }
      break;
  }
} while (menuChoice !== 14);

alert("Programmet avslutat");
console.log("Programmet avslutat");
