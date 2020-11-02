//Faça um programa que, dado um valor definido numa variável, retorne  
//"positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
let numeroZ = 9;
let cond = "";
if (numeroZ < 0 ) {
    cond = "negative";
} 
else if (numeroZ > 0) {
    cond = "positive";
}
else {
    cond = "zero";    
}
console.log(cond);
