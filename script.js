// let menu = prompt("Detta är vår meny");
// menu = trimInput(menu);

let menu;
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

do {
  menu = promptToNumber(
    "Skriv '1' för att utföra addition och '7' för att avsluta programmet"
  );
  let calc = true;
  switch (menu) {
    case 1: //addition
      while (calc) {
        let num1 = promptToNumber("Ange det första talet du vill addera:");
        let num2 = promptToNumber(
          `Du har angett ${num1} + välj ett tal att addera till uträkning :`
        );
        let sum = num1 + num2;
        let continuePrompt = prompt(
          `Summan av ${num1} + ${num2} = ${sum}\n\n Om du vill gå tillbaka till menyn skriv 'ja' annars tryck enter eller ok?`
        );

        history.unshift(num1 + " + " + num2 + " = " + sum);

        if (isValidInput(continuePrompt) === "ja") {
          calc = false;
        }
      }
      break; //Avsluta case 1
    case 2: //subtraktion
      while (calc) {
        let num1 = promptToNumber("Ange det första talet du vill subtrahera:");
        let num2 = promptToNumber(
          `Du har angett ${num1} - välj ett tal att subtrahera med uträkning :`
        );
        let sum = num1 - num2;
        let continuePrompt = prompt(
          `Differensen av ${num1} - ${num2} = ${sum}\n\n Om du vill gå tillbaka till menyn skriv 'ja' annars tryck enter eller ok?`
        );

        history.unshift(num1 + " - " + num2 + " = " + sum);

        if (isValidInput(continuePrompt) === "ja") {
          calc = false;
        }
      }
      break;

    case 3: //multiplikation
      while (calc) {
        let num1 = promptToNumber(
          "Ange det första talet du vill multiplicera:"
        );
        let num2 = promptToNumber(
          `Du har angett ${num1} - välj ett tal att multiplicera med:`
        );
        let sum = num1 * num2;
        let continuePrompt = prompt(
          `Produkten av ${num1} * ${num2} = ${sum}\n\n Om du vill gå tillbaka till menyn skriv 'ja' annars tryck enter eller ok?`
        );

        history.unshift(num1 + " * " + num2 + " = " + sum);

        if (isValidInput(continuePrompt) === "ja") {
          calc = false;
        }
      }
      break;

    case 4: //division
      while (calc) {
        let num1 = promptToNumber("Ange det första talet du vill dividera:");
        let num2 = promptToNumberNoZero(
          `Du har angett ${num1} - välj ett tal att dividera med, OBS! går ej att dividera med noll:`
        );
        let sum = num1 / num2;
        let continuePrompt = prompt(
          `Kvoten av ${num1} / ${num2} = ${sum}\n\n Om du vill gå tillbaka till menyn skriv 'ja' annars tryck enter eller ok?`
        );

        history.unshift(num1 + " / " + num2 + " = " + sum);

        if (isValidInput(continuePrompt) === "ja") {
          calc = false;
        }
      }
      break;

    case 5: //exponentiering
      while (calc) {
        let num1 = promptToNumber(
          "Ange det första talet du vill exponentiera:"
        );
        let num2 = promptToNumber(
          `Du har angett ${num1} - välj ett tal att exponentiera med:`
        );
        let sum = num1 ** num2;
        let continuePrompt = prompt(
          `Resultatet av ${num1} ^ ${num2} = ${sum}\n\n Om du vill gå tillbaka till menyn skriv 'ja' annars tryck enter eller ok?`
        );

        history.unshift(num1 + " ** " + num2 + " = " + sum);

        if (isValidInput(continuePrompt) === "ja") {
          calc = false;
        }
      }

      break;

    case 6: //modulus
      while (calc) {
        let num1 = promptToNumber(
          "Ange det första talet du vill använda modulus på:"
        );
        let num2 = promptToNumberNoZero(
          `Du har angett ${num1} - välj ett tal att använda modulus med, OBS! går ej att använda modulus med noll:`
        );
        let sum = num1 % num2;
        let continuePrompt = prompt(
          `Resultatet av ${num1} % ${num2} = ${sum}\n\n Om du vill gå tillbaka till menyn skriv 'ja' annars tryck enter eller ok?`
        );

        history.unshift(num1 + " % " + num2 + " = " + sum);

        if (isValidInput(continuePrompt) === "ja") {
          calc = false;
        }
      }
      break;
    case 7:
      break;
    case 8:
      break;
    case 9:
      break;
    case 10: //visa historik
      let arrAsText = "";
      for (let i = 0; i < history.length; i++) {
        arrAsText += i + 1 + history[i] + "\n";
      }
      let continuePrompt = prompt(
        "Här är dina uträkningar mata in korresponderande siffra för att använda den i en annan uträkning, alternativt skriv 'ja' för att gå tillbaka till huvudmenyn"
      );
      if (continuePrompt === "ja") {
        break;
      } else if (
        isNaN(continuePrompt) &&
        0 < continuePrompt < history.length + 1
      ) {
        let continuePrompt = prompt("Välj vilket talesätt du vill använda ");
      }
      break;
    case 8: //avsluta programet
      break;
    default: //fel inmatning, be användaren MATA OM
      break;
  }
} while (menu !== 7);

//error hantering av input, tar bort blank space
function isValidInput(input) {
  input = input.trim().toLowerCase();
  return input;
}

function promptToNumber(promptMessage) {
  let input;
  do {
    input = parseFloat(isValidInput(prompt(promptMessage).replace(",", ".")));
  } while (isNaN(parseFloat(input)));
  return input;
}

function promptToNumberNoZero(promptMessage) {
  let input;
  do {
    input = parseFloat(isValidInput(prompt(promptMessage).replace(",", ".")));
  } while (isNaN(parseFloat(input)) || parseFloat(input) === 0);
  return input;
}
