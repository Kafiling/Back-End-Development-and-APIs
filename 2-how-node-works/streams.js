const fs = require('fs')
const server = require('http').createServer()

server.on('request',(req,res) => {
    //solution 1 : load enitre file into memory (BAD)
    /*
    fs.readFile('test-file.txt',(err,data) => {
        if (err){
            console.log(err)
        }
        res.end(data)
    })
    */

    //solution 2 : use Readable Streams
    const readableStream = fs.createReadStream('test-file.txt')
    readableStream.on('data', chunk => {
        //The respond will be writeable Stream
        res.write(chunk)
    })

    //when data end => end respond
    readableStream.on('end', () => {
        res.end();
    })
    readableStream.on('err', () => {
    console.log(err)
    res.statusCode = 500
    res.end("File not found")
    })
})

//open server
server.listen(8000,"127.0.0.1", () => {
    console.log("Listening...")
})