const EventEmitter = require("events")

const emitter = new EventEmitter()

// emitter.on("greet", () => {
//     console.log("Hello world!")
// })

// emitter.emit("greet")

//passing arguments

emitter.on("greet", (arg) => {
    console.log(`Hello, ${arg.name} ${arg.prof}`)
})

emitter.emit("greet", {name:"harshad", prof: "full stack developer"}) 
