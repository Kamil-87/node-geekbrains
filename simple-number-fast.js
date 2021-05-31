
/*function getSimpleNumbersFast(numMin, numMax) {
  const array = []
  const upperLimit = Math.sqrt(numMax)
  const output = [];

  for (let i = 0; i < numMax; i++) {
    array.push(i);
  }

  for (let i = 2; i <= upperLimit; i++) {
    if (array[i]) {
      for (let j = i * i; j < numMax; j += i) {
        array[j] = false;
      }
    }
  }
  // console.log(array)
  for (let i = numMin; i <= numMax; i++) {
    if(array[i]) {
      output.push(i)
      if(output.length === 3) {
        break
      }
    }
  }
  return output
}*/
