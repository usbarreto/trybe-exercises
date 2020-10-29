let n = 4
let linha = ""
let cont = 0

for (let i = 1; i <= n; i += 1) {
    for (let j = 0; j < (n - i); j += 1) {
        linha += "-"
        cont += 1
    }
    for (let k = 0; k < (n - cont); k += 1) {
        linha += "*"
    }
    console.log(linha); 
    cont = 0
    linha = "";
}