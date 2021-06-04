/*
Напишите программу, которая будет принимать на вход несколько аргументов: дату и время в формате «час-день-месяц-год».
Задача программы — создавать для каждого аргумента таймер с обратным отсчётом: посекундный вывод в терминал состояния таймеров (сколько осталось).
По истечении какого-либо таймера, вместо сообщения о том, сколько осталось, требуется показать сообщение о завершении его работы.
Важно, чтобы работа программы основывалась на событиях.
 */

const events = require('events')
const myEmit = new events.EventEmitter()

const myTime = '41-10-04-06-2021'

function dateConversion(date) {
  const arr = date.split('-').reverse()
  const arrDate = arr.slice(0, 3).join('-')
  const arrTime = arr.slice(3).join(':')
  return `${arrDate}T${arrTime}`
}

function diffTime(plannedTime) {
  return new Date(plannedTime).getTime() - Date.now()
}

function addToTimersSettings(date) {
  return diffTime(dateConversion(date))
}

function outputOfQuantityOfTimers(date) {
  const timersSettings = []
  timersSettings.push(addToTimersSettings(date))
  let timersCount = 0

  for (let i = 0; i < timersSettings.length; i++) {
    const timeout = timersSettings[i]
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

myEmit.on('some_event', function (date) {
  outputOfQuantityOfTimers(date)
})

myEmit.emit('some_event', process.argv[2])
myEmit.emit('some_event', process.argv[3])
myEmit.emit('some_event', process.argv[4])
