/*
Напишите программу, которая будет принимать на вход несколько аргументов: дату и время в формате «час-день-месяц-год».
Задача программы — создавать для каждого аргумента таймер с обратным отсчётом: посекундный вывод в терминал состояния таймеров (сколько осталось).
По истечении какого-либо таймера, вместо сообщения о том, сколько осталось, требуется показать сообщение о завершении его работы.
Важно, чтобы работа программы основывалась на событиях.
 */

const EventEmitter = require('events');

const timersSettings = [
  1000
]
const myTime = '21-03-06-2021'

function timeConversion(date) {
  let arr = date.split('-').reverse()
  // arr = arr.map(num => parseInt(num))
  return arr.join('-')
}

function diffTime (plannedTime) {
  return plannedTime - Date.now()
}

function addToTimersSettings() {
  const time = timeConversion(myTime)
  // const timer = diffTime(time)
  const timer = 4000
  timersSettings.push(timer)
}

function outputOfQuantityOfTimers (arrayTimers) {
  let timersCount = 0

  for(let i = 0; i < arrayTimers.length; i++) {
    const timeout = timersSettings[i]
    timersCount = ++timersCount

    setTimeout(() => {
      timersCount = --timersCount
    }, timeout)
  }

  const intervalId = setInterval(() => {
    console.log('Active timers count', timersCount)

    if(timersCount === 0) {
      clearInterval(intervalId)
    }
  }, 1000)
}


function start() {
  addToTimersSettings()
  outputOfQuantityOfTimers(timersSettings)
}

start()

console.log(timeConversion(myTime))
