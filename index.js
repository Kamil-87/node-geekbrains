const colors = require("colors")
const getPrimeNumbers = require('./prime-numbers')

colors.setTheme({
  error: 'red'
})

function trafficLightPrimeNumbers(numMin, numMax) {

  numMin = parseInt(numMin)
  numMax = parseInt(numMax)

 if( (isNaN(numMin) ) || isNaN(numMax) ) {
    return console.log(colors.error(`один из переданных аргументов не число ${numMin}, ${numMax}`))
  }
  if(numMin > numMax) {
    return console.log(colors.error(`numMax: ${colors.bgWhite(numMax)} должно быть больше numMin: ${colors.bgWhite(numMin)}`))
  }

  if(numMin < 2) {
    return console.log(colors.error(`numMin: ${colors.bgWhite(numMin)} должно быть больше или равен 2`))
  }

  const primeNumbers = getPrimeNumbers(numMin, numMax)

  if(primeNumbers.length < 0) {
    console.log(colors.red(`простых чисел в диапазоне ${numMin}, ${numMax} нет`))
  }

  if(primeNumbers[0]) console.log(colors.green( primeNumbers[0]))
  if(primeNumbers[1]) console.log(colors.yellow( primeNumbers[1]))
  if(primeNumbers[2]) console.log(colors.red( primeNumbers[2]))
}

trafficLightPrimeNumbers(process.argv[2], process.argv[3])
