/*let a = 1;
let b = 2;
let c = 5;

if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0 ){
    console.log("true")
}
else {
    console.log("false")
}*/

let num = [1, 3, 5, 8];
let controle = 0;
for (i = 0; i < num.length; i += 1){
    if (num[i] % 2 == 0) {
        controle += 1;
    }
}
if (controle > 0){
    console.log("true")
}
else {
    console.log("false")
}

/*for (i = 0; i < num.length; i += 1){
    if (num[i] % 2 == 0) {
        console.log("true")
    }
    else {
        console.log("false")
    }
}*/