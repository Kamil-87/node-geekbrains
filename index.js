require('colors')
const colors = require("colors")
colors.setTheme({
  error: 'red'
})


const getSimpleNumbers = require('./simple-number')

function stoplightSimpleNumbers(numMin, numMax) {

  numMin = +numMin
  numMax = +numMax

 if( (!(typeof numMin === 'number') || isNaN(numMin) ) || (!(typeof numMax === 'number') || isNaN(numMax)) ) {
    return console.log(colors.error(`один из переданных аргументов не число ${numMin}, ${numMax}`))
  }
  if(numMax < numMin) {
    return console.log(colors.error(`numMax: ${colors.bgWhite(numMax)} должно быть больше numMin: ${colors.bgWhite(numMin)}`))
  }

  const simpleNumber = getSimpleNumbers(numMin, numMax)

  if(!simpleNumber.length) {
    console.log(colors.red(`простых чисел в диапазоне ${numMin}, ${numMax} нет`))
  }

  if(simpleNumber[0]) console.log(colors.green( simpleNumber[0]))
  if(simpleNumber[1]) console.log(colors.yellow( simpleNumber[1]))
  if(simpleNumber[2]) console.log(colors.red( simpleNumber[2]))
}

stoplightSimpleNumbers(numMin=process.argv[2], numMax=process.argv[3])
