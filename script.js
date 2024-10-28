// let menu = prompt("Detta är vår meny");
// menu = trimInput(menu);

// let menu;
let menuChoice;
let history = [];

//Addition
//Subtraktion
//Multiplikation
//Division
//Modulus
//Exponentiering (upphöjt)
//Roten ur (2:a roten ur, 3:e roten ur..)
//historik, använd 4 loop
//Två nummer som input/ case (num1 och num2)

const menuText = `Välj en uträkningsmetod nedan (1-11)\n
    1. Addition för att utföra addition av två tal
    2. Subtraktion för att utföra subtraktion av två tal
    3. Multiplikation för att utföra multiplikation av två tal
    4. Division för att utföra division av två tal
    5. Exponentiering för att räkna med exponenter
    6. Modulus för att utföra modulering av två tal
    7. Roten ur för att utföra roten ur på två tal
    8. Logarithmera för att finna logaritmen av två tal
    9. Trigonometri för att beräkna ett trinometrisk uttryck
    10. Historik, visa historik av tidigare uträkningar
    11. Avsluta för att avsluta programmet`;

do {
  do {
    menuChoice = Number(promptToNumber(menuText));
  } while (menuChoice < 1 || menuChoice > 11);

  let calc = true;
  switch (menuChoice) {
    case 1: //addition
      while (calc) {
        let num1 = promptToNumber("Ange det första talet du vill addera:");
        let num2 = promptToNumber(`Du har angett ${num1} + välj ett tal att addera till uträkning :`);
        let sum = num1 + num2;
        let continuePrompt = prompt(`Summan av ${num1} + ${num2} = ${sum}\n\n Om du vill gå tillbaka till menyn skriv 'ja' annars tryck enter eller ok?`);

        history.unshift(num1 + " + " + num2 + " = " + sum);
        isValidInput(continuePrompt) === "ja" ? (calc = false) : (calc = true); //ternary operator ✔
      }
      break; //Avsluta case 1
    case 2: //subtraktion
      while (calc) {
        let num1 = promptToNumber("Ange det första talet du vill subtrahera:");
        let num2 = promptToNumber(`Du har angett ${num1} - välj ett tal att subtrahera med uträkning :`);
        let sum = num1 - num2;
        let continuePrompt = prompt(`Differensen av ${num1} - ${num2} = ${sum}\n\n Om du vill gå tillbaka till menyn skriv 'ja' annars tryck enter eller ok?`);

        history.unshift(num1 + " - " + num2 + " = " + sum);

        if (isValidInput(continuePrompt) === "ja") {
          calc = false;
        }
      }
      break;

    case 3: //multiplikation
      while (calc) {
        let num1 = promptToNumber("Ange det första talet du vill multiplicera:");
        let num2 = promptToNumber(`Du har angett ${num1} - välj ett tal att multiplicera med:`);
        let sum = num1 * num2;
        let continuePrompt = prompt(`Produkten av ${num1} * ${num2} = ${sum}\n\n Om du vill gå tillbaka till menyn skriv 'ja' annars tryck enter eller ok?`);

        history.unshift(num1 + " * " + num2 + " = " + sum);

        if (isValidInput(continuePrompt) === "ja") {
          calc = false;
        }
      }
      break;

    case 4: //division
      while (calc) {
        let num1 = promptToNumber("Ange det första talet du vill dividera:");
        let num2 = promptToNumberNoZero(`Du har angett ${num1} - välj ett tal att dividera med, OBS! går ej att dividera med noll:`);
        let sum = num1 / num2;
        let continuePrompt = prompt(`Kvoten av ${num1} / ${num2} = ${sum}\n\n Om du vill gå tillbaka till menyn skriv 'ja' annars tryck enter eller ok?`);

        history.unshift(num1 + " / " + num2 + " = " + sum);

        if (isValidInput(continuePrompt) === "ja") {
          calc = false;
        }
      }
      break;
    case 5: //exponentiering
      while (calc) {
        let num1 = promptToNumber("Ange det första talet du vill exponentiera:");
        let num2 = promptToNumber(`Du har angett ${num1} - välj ett tal att exponentiera med:`);
        let sum = num1 ** num2;
        let continuePrompt = prompt(`Resultatet av ${num1} ^ ${num2} = ${sum}\n\n Om du vill gå tillbaka till menyn skriv 'ja' annars tryck enter eller ok?`);

        history.unshift(num1 + " ^ " + num2 + " = " + sum);

        if (isValidInput(continuePrompt) === "ja") {
          calc = false;
        }
      }

      break;

    case 6: //modulus
      while (calc) {
        let num1 = promptToNumber("Ange det första talet du vill använda modulus på:");
        let num2 = promptToNumberNoZero(`Du har angett ${num1} - välj ett tal att använda modulus med, OBS! går ej att använda modulus med noll:`);
        let sum = num1 % num2;
        let continuePrompt = prompt(`Resttalet av ${num1} % ${num2} = ${sum}\n\n Om du vill gå tillbaka till menyn skriv 'ja' annars tryck enter eller ok?`);

        history.unshift(num1 + " % " + num2 + " = " + sum);

        if (isValidInput(continuePrompt) === "ja") {
          calc = false;
        }
      }
      break;
    case 7: //Roten ur
      while (calc) {
        let num1 = promptToNumber("Ange vilket tal du vill ta roten ur på:");
        let num2 = promptToNumber("Ange vilken grad av rot du vill använda (ex. 2, 3, 4...)");
        let sum = num1 ** (1 / num2); //num1*(1/num2)  (num1**1/2) ((num**2)*1/2) ??? ROTEN UR!! Math.pow(num1,1/num2)
        let continuePrompt = prompt(`Resultatet av ${num2} √ ${num1} = ${sum}\n\n Om du vill gå tillbaka till menyn skriv 'ja' annars tryck enter eller ok?`);
        history.unshift(num1 + " √ " + num2 + " = " + sum);
        if (isValidInput(continuePrompt) === "ja") {
          calc = false;
        }
      }
      //log = let sum = Math.log(num1) / Math.log(num2)
      break;
    case 8: //logarithmer
      while (calc) {
        let num1 = promptToNumber("Ange basen för logaritmerisk beräkning (t.ex. 3):");
        let num2 = promptToNumber("Ange värdet som ska logaritmeras (t.ex. 9)");
        let sum = Math.log(num2) / Math.log(num1);
        let continuePrompt = prompt(`log${num1}(${num2}) = ${sum}\n\n Om du vill gå tillbaka till menyn skriv 'ja' annars tryck enter eller ok?`);
        history.unshift(`log${num1}(${num2}) = ${sum}`);
        if (isValidInput(continuePrompt) === "ja") {
          calc = false;
        }
      }
      break;
    case 9: //trignometeri
      while (calc) {
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
        history.unshift(calculationAsText);
        let continuePrompt = prompt(`${calculationAsText}\n\n Om du vill gå tillbaka till menyn skriv 'ja' annars tryck enter eller ok?`);

        if (isValidInput(continuePrompt) === "ja") {
          calc = false;
        }
      }
      break;
    case 10: //visa historik
      let arrAsText = "";
      for (let i = 0; i < history.length; i++) {
        arrAsText += `${i + 1}: ${history[i]}\n`;
      }
      let continuePrompt = prompt("Här är dina uträkningar mata in korresponderande siffra för att använda den i en annan uträkning, alternativt skriv 'ja' för att gå tillbaka till huvudmenyn\n\n" + arrAsText);
      if (continuePrompt === "ja") {
        break;
      } else if (isNaN(continuePrompt) && 0 < continuePrompt < history.length + 1) {
        storedNum = arrAsText.slice(0, arrAsText.lastIndexOf("=")).trim();
      }
      break;

    default: //fel inmatning, be användaren MATA OM
      break;
  }
} while (menuChoice !== 11);

//error hantering av input, tar bort blank space
function isValidInput(input) {
  input = input.trim().toLowerCase();
  return input;
}

function promptToNumber(promptMessage, isNum1) {
  let input;

  if (isNum1 && storedNum !== undefined) {
    alert(`num1 är ${storedNum}`);
    input = parseFloat(storedNum);
    storedNum = undefined;
  } else {
    do {
      input = parseFloat(isValidInput(prompt(promptMessage).replace(",", ".")));
    } while (isNaN(parseFloat(input)));
  }
  return input;
}

function promptToNumberNoZero(promptMessage) {
  let input;
  do {
    input = parseFloat(isValidInput(prompt(promptMessage).replace(",", ".")));
  } while (isNaN(parseFloat(input)) || parseFloat(input) === 0);
  return input;
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
  return parseFloat(number);
}
