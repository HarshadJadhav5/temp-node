// every res must have .end() which singnals that the communication is over

const http = require('http')

const server = http.createServer(function(req,res) {
    console.log('user hit the server')
    res.end('home page')
})

server.listen(5000)