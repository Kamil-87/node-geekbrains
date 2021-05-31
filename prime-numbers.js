function isPrime(num) {
  if (num < 2) return false

  const sqrtNum = Math.floor(Math.sqrt(num))

  for (let i = 2; i <= sqrtNum; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

const getPrimeNumbers = function (numMin, numMax) {
  const primeNumbers = []

  for (let i = numMin; i <= numMax; i++) {
    if(isPrime(i)) {
      primeNumbers.push(i)
    }
  }

  return primeNumbers
}

module.exports = getPrimeNumbers
