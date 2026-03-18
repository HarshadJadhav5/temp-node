const fs = require("fs")
const path = require("path")

//path of input file
const inputFilePath = path.join(__dirname, 'input.txt')
// console.log(inputFilePath)

const readStream = fs.createReadStream(inputFilePath, "utf-8")
console.log(readStream)


// readStream.on('data', (chunk) => {
//     console.log("received a chunk of data", chunk)
// })

// readStream.on('end', () => {
//     console.log("finished")
// })

