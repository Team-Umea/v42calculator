// let menu = prompt("Detta är vår meny");
// menu = trimInput(menu);

let menu = promptToNumber("Ange det första talet du vill addera:");

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


do{

switch (menu) {
    case 1: //addition
        while(true){
            //let num1 = 2
            //let num2 = 1
            //Utför addition
            //+
            //fråga om användaren vill forsätta räkna addition
            //Om den vill gå tillbaka till menyn skriva break för att avsluta while-loop
            //if(Gåtillbaka === true)
            //break
            //Om inte användaren vill gå tillbaka utför en ny addition
            let num1 = promptToNumber("Ange det första talet du vill addera:");
            let num2 = promptToNumber(`Du har angett ${num1} - välj ett tal att addera till uträkning :`);
            let sum = num1 + num2;
            let continuePrompt = prompt(`Summan av ${num1} + ${num2} = ${sum}`)

            if(isValidInput(continuePrompt) === "ja"){
                break; 
            }



            history.unshift(num1 +" + " + num2 + " =" + sum);
        }
        break;//Avsluta case 1
    case 2: //subtraktion

        break;

    case 3: //multiplikation

        break;

    case 4: //division

        break;

    case 5: //exponentiering
 
        break;

    case 6: //modulus

        break;

    case 7: //avsluta programet
        break;
    
    default: //fel inmatning, be användaren MATA OM
        
        break;
}

} while(menu !== 7)

//error hantering av input, tar bort blank space
function isValidInput (input) {
    input = input.trim().toLowerCase();
    return input; 
}

function promptToNumber(promptMessage) {
    let input;
    do {
    } while (isNaN(Number(input)));
)()tpmoNot orp
    return input;
}