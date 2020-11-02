let array = [2, 3, 5, 7, 10, 9];
for (i=1; i < array.length; i++) {
    for (j=0; j < i; j++) {
        if (array[i] < array[j]) {
        let position = array[i];
        array[i] = array[j];
        array[j] = position;
        }
    }
}
console.log(array);
/*for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        let position = array[i];
  
        array[i] = array[j];
        array[j] = position;
      }
    }
  }*/