// //event-driven programming in nodejs
// // listen for specific event and register function that will execute in response to that events
// const EventEmitter = require('events')

// //this obj has two methods on-listen for an event, emit- emit an event
// const customEmitter = new EventEmitter()

// point to remember
// 1- the same event can have other logic
// 2- order matters! we first listen for the event and then we emit it
// 3- we can pass arguments to the event handler by passing them as additional arguments to emit()

const EventEmitter = require('events')

const eventemitter = new EventEmitter()

eventemitter.on('response', () => {
  console.log(`data received`)
})

eventemitter.on('response', () => {
  console.log(`data received`)
})

eventemitter.emit('response')