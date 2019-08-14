// https://blog.risingstack.com/node-hero-tutorial-getting-started-with-node-js/

require('./app/index')
const _ = require('lodash')
_.assign({ 'a': 1 }, { 'b': 2 }, { 'c': 3 });


const fs = require('fs')

function testeFile(fileName) {
    console.log('start reading a file...')
    fs.readFile(fileName, 'utf-8', function (err, content) {
    if (err) {
        console.log('error happened during reading the file')
        return console.log(err)
    }

    console.log(content)
    })

    console.log('end of the file')
}


testeFile('file1.md')

