const http = require("http")
const fs = require("fs")
const path = require("path")

// const inputfilePath = path.join(__dirname, "input.txt")
// // const outputfilePath = path(__dirname, "httpresult.txt")

// const readStream = fs.createReadStream(inputfilePath, "utf-8")

// http.createServer(function (req,res) {
//     // const text = fs.readFileSync(inputfilePath)

//     readStream.on('data', (chunk) => {
//         res.end(chunk)
//     })
//     readStream.on("error", (err) => {
//         console.log(err)
//     })

// })
// .listen(5000)

// the above code didn't ran becoz
//mistake 1 = we created the stream outside the server
// A stream is like a **tape cassette** — once it has been played (read), it is **finished**. It doesn't rewind automatically.
// First Request:
// readStream → has data → plays fully ✅

// Second Request:
// readStream → already finished → no data → keeps waiting forever 
// mistake 2 =  res.end() inside data event
// res.end() closes the response — so if there are multiple chunks, it will try to end the response multiple times and crash.

// -------The Fix — Move readStream inside the server

const inputfilePath = path.join(__dirname, "input.txt")
// const outputfilePath = path(__dirname, "httpresult.txt")

http.createServer(function (req,res) {
    const readStream = fs.createReadStream(inputfilePath, "utf-8")
    // const text = fs.readFileSync(inputfilePath)

    readStream.on('data', (chunk) => {
        res.write(chunk) // writes each chunk
    })

    readStream.on('end', () => {
        res.end()          // ✅ end response when done
    })

    readStream.on("error", (err) => {
        res.end("error readin file!")
        console.log(err)
    })
    // always pair res.write() with a res.end() in the end event, otherwise the browser never knows the response is complete.

})
.listen(5000)