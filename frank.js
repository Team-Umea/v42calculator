 menu = Number(prompt("Välj vad du vill räkna ut 1-6: 1: Addition(+) 2: Subtraktion(-)3: Multiplikation(*) 4:Division(/) 5:Exponentiering(^) 6:Modulus (%)"))
let kalkylator = true
 switch (menu){
     case 1:

        num1 = Number(prompt("ange ditt första tal?"))
        num2 = Number(prompt("ange ditt andra tal?"))
        console.log("x + y = :",num1 + num2) 
        break;
        case 2:
            num1 = Number(prompt("ange ditt första tal(ex x-y )?"))
            num2 = Number(prompt("ange ditt andra tal?"))
            console.log("x - y = :",num1 - num2)
            break;
            case 3:
                num1 = Number(prompt("ange ditt första tal?"))
                num2 = Number(prompt("ange ditt andra tal?"))
                console.log( "x * y"+"x =",num1 ,"y =",num2 + num1 * num2)
                break;
                case 4:
                    num1 = Number(prompt("ange ditt första tal?"))
                    num2 = Number(prompt("ange ditt andra tal?"))
                    console.log("x / y = :",num1 / num2)
                    break;
                    case 5:
                        num1 = Number(prompt("ange ditt första tal?"))
                        num2 = 2
                        console.log("ditt tal ^2 blir :",num1 ** num2)
                        break;
                        case 6:
                            num1 = Number(prompt("ange ditt första tal?"))
                            num2 = Number(prompt("ange ditt andra tal?"))
                            console.log("x % y = :",num1 % num2)
                            break;

                default:
                    console.log("Du måste skriva vilken meny (1-6) du vill in på")
                break;

}
