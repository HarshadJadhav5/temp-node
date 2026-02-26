// Two method that we can use with node to read files and create one from scratch
const { readFileSync, writeFileSync } = require('fs')
console.log('start')


// reading from the file system
// needs two parameters 1st path to that specific file and second what is the encoding
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
           

// console.log(first, second)

//append to the file - an options object flag:'a' stand for append
// writeFileSync(
//     './content/result-sync.txt', 
//     `Here is the result: ${first}, ${second} `,
//     { flag: 'a'}
// )

// fs.writeFile('hello.txt', 'hello world', (err) => {
//     if(err) throw err
//     console.log('file created')
// })

// fs.unlink('hello.txt', (err) => {
//     if(err) throw err
//     console.log('file deleted')
// })

// fs.mkdir('folder', (err) => {

//     if(err) throw err
//     console.log('folder created')
//     fs.writeFile('./folder/hello.txt', 'inside greet folder', (err) => {
//         if(err) throw err
//         console.log('file created')
//     })

// })
 

writeFileSync(
    './content/result-sync.txt', 
    `here is the result: ${first}, ${second}`, 
    { flag: 'a' }
)
console.log('done with this task')