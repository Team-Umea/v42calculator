 menu = Number(prompt("Välj vad du vill räkna ut 1-6: 1: Addition(+) 2: Subtraktion(-)3: Multiplikation(*) 4:Division(/) 5:Exponentiering(^) 6:Modulus (%)"))

 switch (menu){
     case 1:
        num1 = Number(prompt("ange ditt första tal?"))
        num2 = Number(prompt("ange ditt andra tal?"))
        console.log("ditt tal blir",num1 + num2) 
        break;
        case 2:
            distance = prompt("hur långt sprang du idag i kilometer?")
            console.log( * 0.621371)
            break;
            case 3:
                weight=Number(prompt("Vad väger du i kg idag?"))
                console.log(weight * 2.20462)
                break;
                default:
                    console.log("Du måste skriva vilken meny (1-3) du vill in på")
                    break;

}
