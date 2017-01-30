const calc = require('./calc')
const _ = require('lodash')
const fs = require('fs')

_.assign({ 'a': 1}, {'b': 2}, {'c': 3});

const numbersToAdd = [
	3,
	4,
	10,
	2
]

const result = calc.sum(numbersToAdd)
console.log(`This result is: ${result}`)

function stats (file) {
    return new Promise((resolve, reject) => {
	fs.stat(file,(err, data) => {
	    if (err) {
		return reject (err)
            }
	    resolve(data)
    })
})

}

Promise.all([
  stats('file1'),
  stats('file2'),
  stats('file3')
])
.then((data) => console.log(data))
.catch((err) => console.log(err))
