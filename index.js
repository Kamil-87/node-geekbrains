/*
Напишите программу, которая будет принимать на вход несколько аргументов: дату и время в формате «час-день-месяц-год».
Задача программы — создавать для каждого аргумента таймер с обратным отсчётом: посекундный вывод в терминал состояния таймеров (сколько осталось).

* По истечении какого-либо таймера, вместо сообщения о том, сколько осталось, требуется показать сообщение о завершении его работы.
Важно, чтобы работа программы основывалась на событиях.
 */

const events = require('events')
const eventEmitter = new events.EventEmitter()

const timersSettings = []
const myTime1 = '32-11-06-06-2021'
const myTime2 = '31-11-06-06-2021'


function dateConversion(date) {
  const arr = date.split('-').reverse()
  const arrDate = arr.slice(0, 3).join('-')
  const arrTime = arr.slice(3).join(':')
  return `${arrDate}T${arrTime}`
}

function diffTime(plannedTime) {
  return new Date(plannedTime).getTime() - Date.now()
}

function outputOfQuantityOfTimers(timers) {

  let timersCount = 0

  for (let i = 0; i < timers.length; i++) {
    const timeout = timers[i]
    timersCount = ++timersCount

    setTimeout(() => {
      timersCount = --timersCount
    }, timeout)
  }

  const intervalId = setInterval(() => {
    console.log('Active timers count', timersCount)

    if (timersCount === 0) {
      clearInterval(intervalId)
    }
  }, 1000)
}

function addToTimersSettings(date) {
  const timer = diffTime(dateConversion(date))
  if(timer > 1000) {
    timersSettings.push(timer)
    console.log(timersSettings )
  }
}

eventEmitter.on('my_event', addToTimersSettings)
// eventEmitter.on('error', (error) => console.log('Error:', error))

for(let i = 2; i < process.argv.length; i++) {
  console.log(process.argv[i])
  eventEmitter.emit('my_event', process.argv[i])
}
outputOfQuantityOfTimers(timersSettings)

