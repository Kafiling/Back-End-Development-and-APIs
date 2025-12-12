const EventEmitter = require("events")

const myEmitter = new EventEmitter();

//!! Best Prac : Create new class that inhert from EventEmitter
// Use ES6 Syntax
class Sales extends EventEmitter {
    // inti class
    constructor() {
        super() // Inhert all method of parent class
    }
}

myEmitter = new Sales()


myEmitter.on("newSale",()=>{
    console.log('There was a new sale!')
})

myEmitter.on("newSale",()=>{
    console.log('Customer Name is K4')
})

// Emitter can also recive args
myEmitter.on("newSale", stock =>{
    console.log(`There are ${stock} item(s) in stock`)
})

// When Emitter emit event, ALL event listener will be fired
myEmitter.emit("newSale",9);


