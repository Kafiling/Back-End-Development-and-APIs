// REWRITE of server example using observer patten

const EventEmitter = require("events")
const http = require('http')

const server = http.createServer();
// .on is a listener
server.on('request',(req,res) => {
    console.log('request received')
    // write respond back
    res.end('request received')
})

server.on('request',(req,res) => {
    console.log('Another request received')
})

server.on('close',(req,res) => {
    console.log('server closed')
})

//open server
server.listen(8000,"127.0.0.1", () => {
    console.log("waiting for request ...")
})