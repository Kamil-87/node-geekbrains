const GetSimpleNumbers = function (numMin, numMax) {
  const simpleNumberList = []
  if(numMin < 2) numMin = 2

  nextNumber:
    for (let i = numMin; i <= numMax; i++) {

      for (let j = numMin; j < i; j++) {
        if (i % j === 0) continue nextNumber
      }

      if(simpleNumberList.length < 3) {
        simpleNumberList.push(i)
      }
    }

  return simpleNumberList
}

module.exports = GetSimpleNumbers
