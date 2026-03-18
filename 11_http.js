// basic web server structure
// const http = require('http')

// const server = http.createServer((req, res) => {
//     if(req.url === '/') {
//         res.end('Home Page')
//     }

//     else if(req.url === '/contact') {
//         res.end('this is the about section')
//     }

//     else {
//         res.end('404 not found')
//   always end the response otherwise Without res.end(), the browser receives the data but never gets told the response is finished — so it just keeps loading forever. 
//     }
// })

// server.listen(5000)