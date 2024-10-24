// loop så att det går att fortsätta räkna om man vill
let calculator = true;
while (calculator) {
  const num1 = Number(prompt("Enter the numerator"));
  const operator = prompt("Pick an operator (+, -, *, /, %)");
  const num2 = Number(prompt("Enter the denominator"));

  // kollar så att det är nummer samt en operator
  if (isNaN(num1) || isNaN(num2)) {
    console.log("You can only enter numbers");
    alert("You can only enter numbers");
  } else if (!["+", "-", "*", "/", "%"].includes(operator)) {
    console.log("You must enter a valid operator (+, -, *, /, %)");
    alert("You must enter a valid operator (+, -, *, /, %)");

    // kollar vilken operator samt tal du gett och gör uträkningen
  } else if (operator === "+") {
    console.log(num1 + num2);
    alert(num1 + num2);
  } else if (operator === "-") {
    console.log(num1 - num2);
    alert(num1 - num2);
  } else if (operator === "*") {
    console.log(num1 * num2);
    alert(num1 * num2);
    // säger att du inte kan dela med noll
  } else if (operator === "/") {
    if (num2 == 0) {
      alert("You cannot divide by zero");
      console.log("You cannot divide by zero");
    } else {
      console.log(num1 / num2);
      alert(num1 / num2);
    }
  } else if (operator === "%") {
    if (num2 == 0) {
      console.log("Denominator can not be zero.");
      alert("Denominator can not be zero.");
    } else {
      console.log(num1 % num2);
      alert(num1 % num2);
    }
  }
  // slutet på loopen
  let userInfo = prompt("Do you wish to continue? (yes/no)"); //måste kolla om userInfo är definerat för att inte .toLowerCase ska ge ett error
  if (userInfo) {
    userInfo.toLowerCase();
  }
  if (userInfo == "no") {
    calculator = false;
    console.log("Thank you for using our calculator!");
  }
}
