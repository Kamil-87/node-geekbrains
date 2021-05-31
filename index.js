/*
По ссылке вы найдете файл с логами запросов к серверу весом более 2 Гб.
Напишите программу, которая находит в этом файле все записи с ip-адресами 89.123.1.41 и 34.48.240.111,
а также сохраняет их в отдельные файлы с названием “%ip-адрес%_requests.log”.
*/

const fs = require('fs')
const stream = require('stream')

const split2 = require("split2");

const ipAddress1 = '89.123.1.41'
const ipAddress2 = '34.48.240.111'
const file = 'access1.log'

function startSearchProcess(file, ip1, ip2) {
  let lines = fs.createReadStream(file, 'utf-8').pipe(split2())
  const writer1 = fs.createWriteStream(`${ip1}_request.log`)
  const writer2 = fs.createWriteStream(`${ip2}_request.log`)
  searchIpAndWriteToFile(lines, ip1, writer1)
  searchIpAndWriteToFile(lines, ip2, writer2)
}

function searchIpAndWriteToFile(lines, ip, writer) {
  lines
    .pipe(searchIpFilter(ip))
    .on('data', async line => writer.write(line + '\n'))
}

const searchIpFilter = ip => new stream.Transform({
  transform(chunk, encoding, callback) {
    const stringChunk = chunk.toString();
    if (stringChunk.includes(ip)) {
      let result = stringChunk
      this.push(result)
      console.log('result', result)
    }

    callback();
  }
});


startSearchProcess(file, ipAddress1, ipAddress2);





