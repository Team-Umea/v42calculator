let kalkylatorVariabel = true;
let searchHistory = [];

alert(`Välkommen till min kalkylator!\n
    Med denna kalkylator kan du kontrollera:
    1. Addition (+)
    2. Subtraktion (-)
    3. Multiplikation (*)
    4. Division (/)
    5. Kvadratrot (sqrt)
    6. Pi
    7. Visa historik
    8. Avsluta program`)

while (kalkylatorVariabel) {

    let choice = prompt(`Ange ditt val (1-8):
    1. Addition (+)
    2. Subtraktion (-)
    3. Multiplikation (*)
    4. Division (/)
    5. Kvadratrot (sqrt)
    6. Pi
    7. Visa historik
    8. Avsluta program`);
    let num1; 
    let num2;
    let result;

    switch (choice) {
        case "1":
            num1 = Number(prompt("Addition: Mata in det första talet:"));
            num2 = Number(prompt(`Mata in det andra talet: ${num1} +`));
            result = num1 + num2;
            break;
        case "2":
            num1 = Number(prompt("Subtraktion: Mata in det första talet:"));
            num2 = Number(prompt(`Mata in det andra talet: ${num1} -`));
            result = num1 - num2;
            break;
        case "3":
            num1 = Number(prompt("Multiplikation: Mata in det första talet:"));
            num2 = Number(prompt(`Mata in det andra talet: ${num1} x `));
            result = num1 * num2;
            break;
        case "4":
            num1 = Number(prompt("Divsion: Mata in det första talet:"));
            num2 = Number(prompt(`Mata in det andra talet: ${num1} / `));
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                alert("Division med noll är inte tillåten.");
                continue; // Fortsätt till nästa iteration
            }
            break;
        case "5":
            num1 = Number(prompt("Mata in ett tal för att beräkna kvadratroten:"));
            if (num1 >= 0) {
                result = Math.sqrt(num1);
            } else {
                alert("Kvadratroten kan inte tas av negativa tal.");
                continue; // Fortsätt till nästa iteration
            }
            break;
        case "6":
            let decimals = Number(prompt("Hur många decimaler vill du ha på Pi?"));
            result = Math.PI.toFixed(decimals);
            break;
        case "7":
            if (searchHistory.length > 0) {
                alert("Dina senaste sökningar:\n" + searchHistory.join("\n"));
            } else {
                alert("Ingen historik tillgänglig.");
            }
            continue; 
        case "8":
            alert("Kalkylatorn stängdes ned. Tack för att du nyttjade tjänsten.");
            kalkylatorVariabel = false; 
            continue; 
        default:
            alert("Ogiltigt val, försök igen.");
            continue; 
    }


    if (result !== undefined) {
        alert(`Resultatet är: ${result}`);
        searchHistory.push(result);
        if (searchHistory.length > 10) {
            searchHistory.shift();
        }
    
    }
}


