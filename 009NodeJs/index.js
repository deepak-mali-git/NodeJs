const os = require('os')

// console.warn(os.arch())
// console.warn(os.freemem()/(1024*1024*1024))
// console.warn(os.totalmem()/(1024*1024*1024))

// console.log(os.hostname())
// console.log(os.platform())
// console.log(os.userInfo())

 






// // // EMIT

// const express =require("express")
// const Eventemitter = require("events")
// const app = express();

// const event = new Eventemitter();


// let count = 0;
// event.on("countAPI",() => {
//     count++
//     console.log('event called  ' + count)
// })

// app.get("/",(req,resp) => {
//     resp.send("api called")
//     event.emit("countAPI")
// })


// app.get("/search",(req,resp) => {
//     resp.send("search api called")
//     event.emit("countAPI")
// })



// app.get("/update",(req,resp) => {
//     resp.send("update api called")
//     event.emit("countAPI")
// })


// app.listen(5000)