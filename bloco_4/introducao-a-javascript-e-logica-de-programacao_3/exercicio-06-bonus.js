//Programa escrito por emassaki https://github.com/emassaki/trybe-exercises/blob/exercises/4.3/fundamentals/bloco_4/dia_3/bonus_02.js 

let n = 29;
let numberOfDividers = 0;

for (let smallerNumbers = n; smallerNumbers > 0; smallerNumbers -= 1) {
  if (n % smallerNumbers == 0) {
    numberOfDividers += 1;
  } 
}

if (numberOfDividers == 2) {
  console.log(`The number ${n} is a prime number! :D`)
} else {
  console.log(`The number ${n} is not a prime number! D:`)
}