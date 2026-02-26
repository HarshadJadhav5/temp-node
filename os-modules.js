// os module provided many properties and method to work with server and operating system
const os = require('os')

// info about current user
// const user = os.userInfo()
// console.log(user.username)

//method return the syste uptime in seconds
// console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name:os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    userinfo: os.userInfo()
}
console.log(currentOS)