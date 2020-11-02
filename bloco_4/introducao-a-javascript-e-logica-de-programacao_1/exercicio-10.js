/*valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto)*/

let valorCusto = 100;
let valorVenda = 130;
let lucro = 0;
let taxa = .2;
let quant = 1000;
if (valorCusto > 0 && valorVenda > 0){
    lucro = (valorVenda - valorCusto*(1+ taxa))*quant;
    console.log("Lucro = " + lucro)
}
else {
    console.log("Erro: valores de entrada negativos ou iguais a zero");
}