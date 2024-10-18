let kalkylator = true


while(kalkylator) {
const tal1 = Number(prompt("Välj första talet"))
const tal2 = Number(prompt("Välj andra talet"))
const operator = (prompt("Välj en operator(+,-,*,/,%)"))

if (isNaN(tal1)||isNaN(tal2)){
    console.log("skriv in ett nummer dumfan")
    alert("skriv in ett nummer dumfan")
}else if (!["+", "-", "*", "/", "%"].includes(operator)) {
        console.log("Skriv in en giltig operator.");
        alert("Skriv in en giltig operator.");
     
    
}else if (operator === "+"){
    console.log(tal1 + tal2)
    alert(tal1 +  tal2)
} else if (operator === "-"){
    console.log(tal1 - tal2)
    alert(tal1 -  tal2)
} else if (operator === "*"){
    console.log(tal1 * tal2)
    alert(tal1 *  tal2) 
    
} else if (operator === "/"){
    if (tal2 == 0) {
        alert("du kan icke dela med noll")
        console.log("du kan icke dela med noll")
     } else {
        console.log(tal1 / tal2)
        alert(tal1 /  tal2)
     }
  
} else if(operator === "%"){
    if(tal2 ==0) {
        console.log("tal2 kan inte va noll")
        alert("tal2 kan va noll")
    } else {
        console.log(tal1 %  tal2)
        alert(tal1 %  tal2)
    }
}
let användarinfo = prompt("vill du fortsätta uträkningen? ja/nej").toLowerCase();
if (användarinfo !== "ja"){
    kalkylator=false;
    console.log("Tack för att du använde dig av team umeås kalkylator")
}
}