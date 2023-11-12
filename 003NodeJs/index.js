const express = require('express')
const app = express();
const reqFilter = require('./middleware')
const route = express.Router();

route.use(reqFilter)


// MIDDLE WARE



// middleware on application/or application middleware  
// app.use(reqFilter)



//middleware on single ware

route.get('/', (req, res) => {
    res.send("welcome to home page")
})

app.get('/user', (req, res) => {
    res.send("welcome to user page")
})

app.get('/about', (req, res) => {
    res.send("welcome to about page")
})

app.use('/', route)
app.listen(4500)

