// const fs = require('fs')
// fs.writeFileSync("abc.txt","hello world")





//###############################################

//  HTTP HANDLE REQUEST AND RESPONSE

// const http = require('http')

// http.createServer((req,resp) =>{
//     resp.write("hello world")
//     resp.end();
// }).listen(3000)




//###############################################
// COLORS

// const colors = require('colors')
// console.log("hello world".bgBlue)   




//###############################################
// const http = require('http')
// const data = require('./data')

// http.createServer((req,resp) => {
//     resp.writeHead(200,{'Content-Type':'application\json'});
//     resp.write(JSON.stringify(data));
//     resp.end();
// }).listen(5000);






//###############################################
// const fs = require('fs')
// const input = process.argv;

// if(input[2] == 'add') {
//     fs.writeFileSync(input[3],input[4])
// }
// else if (input[2] == 'remove') {
//     fs.unlinkSync(input[3])
// } 
// else {
//     console.log("invalid input")
// }








//###############################################

// const fs = require('fs')
// const path = require('path')
// const dirPath = path.join(__dirname,"files")

// for(let i = 0; i<10; i++)
//     fs.writeFileSync(dirPath + `/home${i}.txt`, "there is some content in this all new files");


// // for(let i = 0; i<10; i++)
// //     fs.unlinkSync(dirPath + `/home${i}.txt`);

// fs.readdir(dirPath,(err,files) =>{
//     files.forEach((item) => {
//         console.log(item);
//     })
// })

// console.warn(dirPath)






//###############################################
//CRUD OPERATION 


// const fs = require('fs')
// const path = require('path')
// const dirPath = path.join(__dirname,'files')
// const filePath = `${dirPath}/apple.txt`

// fs.writeFileSync(filePath,'This is a simple text file')
// fs.readFile(filePath,'utf8',(err,item) => {
//     console.log(item)
// })



// fs.appendFile(filePath, " this file is updated or appended", (err) => {
//     if(!err)
//     console.log("file is updated successfully");

//     else 
//     console.log("some error done while updating the file")
// })




// fs.rename(filePath,`${dirPath}/fruit.txt`,(err) => {
//     if(!err)
//         console.log("file is updated successfully");
// })
    



// fs.unlinkSync(`${dirPath}/fruit.txt`);






//###############################################

// let a = 0, b = 0;

// let waitingData = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve(80)
//     },3000)
// })

// waitingData.then((data) => {
//     b = data;   
//     console.log(a+b)
// })




//###############################################
// Call Stack -> Node API's -> Event Loop

const express = require('express')
const app = express()

app.get('',(req,res) => {
    res.send("Hello this is a Home page")
})

app.get('/about',(req,res) => {
    res.send("Hello this is about page")
})
app.get('/help',(req,res) => {
    res.send("Hello this is help page")
})

app.listen(5000)