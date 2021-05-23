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

  const simpleNumberList = getSimpleNumbers(numMin, numMax)

  if(!simpleNumberList.length) {
    console.log(colors.red(`простых чисел в диапазоне ${numMin}, ${numMax} нет`))
  }

  if(simpleNumberList[0]) console.log(colors.green( simpleNumberList[0]))
  if(simpleNumberList[1]) console.log(colors.yellow( simpleNumberList[1]))
  if(simpleNumberList[2]) console.log(colors.red( simpleNumberList[2]))
}

stoplightSimpleNumbers(numMin=process.argv[2], numMax=process.argv[3])
