let numA = 8
let numB = 7
let numC = 9

if (numA > numB && numA > numC) {
    console.log(numA)
}
else if (numB > numA && numB > numC) {
    console.log(numB)
}
else if (numC > numA && numC > numB) {
    console.log(numC)
}
else {
    console.log("Erro: valores iguais")
}