const { readFile, writeFile } = require('fs')
console.log('start')
readFile('./content/first.txt', 'utf8', (err, data) => {
    if(err) throw err

    const first = data

    readFile('./content/second.txt', 'utf8', (err, data) => {
        if(err) throw err

        const second = data
        writeFile(
            './content/result-async.txt',
            `Here is the result: ${first}, ${second}`,
            // { flag: 'a'},
            (err) => {
                if(err) throw err 
                console.log('done with this task')
            }
        )
    })
})
console.log('starting with the next task')