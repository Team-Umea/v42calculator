// loop så man kan räkna flera tal
let kalkylator = true;
while (kalkylator) {
  const tal1 = Number(prompt("Välj första talet"));
  const operator = prompt("Välj en operator(+,-,*,/,%)");
  const tal2 = Number(prompt("Välj andra talet"));
  // kollar så att det är nummer samt en operator
  if (isNaN(tal1) || isNaN(tal2)) {
    console.log("skriv in ett nummer dumfan");
    alert("skriv in ett nummer dumfan");
  } else if (!["+", "-", "*", "/", "%"].includes(operator)) {
    console.log("Skriv in en giltig operator.");
    alert("Skriv in en giltig operator.");

    // kollar vilken operator samt tal du gett och gör uträkningen
  } else if (operator === "+") {
    console.log(tal1 + tal2);
    alert(tal1 + tal2);
  } else if (operator === "-") {
    console.log(tal1 - tal2);
    alert(tal1 - tal2);
  } else if (operator === "*") {
    console.log(tal1 * tal2);
    alert(tal1 * tal2);
    // säger att du inte kan dela med noll
  } else if (operator === "/") {
    if (tal2 == 0) {
      alert("du kan icke dela med noll");
      console.log("du kan icke dela med noll");
    } else {
      console.log(tal1 / tal2);
      alert(tal1 / tal2);
    }
  } else if (operator === "%") {
    if (tal2 == 0) {
      console.log("tal2 kan inte va noll");
      alert("tal2 kan ej va noll");
    } else {
      console.log(tal1 % tal2);
      alert(tal1 % tal2);
    }
  }
  // slutet på loopen
  let användarinfo = prompt("vill du fortsätta uträkningen? ja/nej"); //måste kolla om användarInfo är definerat för att inte .toLowerCase ska ge ett error
  if (användarinfo) {
    användarinfo.toLowerCase();
  }
  if (användarinfo !== "ja") {
    kalkylator = false;
    console.log("Tack för att du använde dig av team umeås kalkylator");
  }
}
