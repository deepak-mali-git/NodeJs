const express = require('express')
const path = require('path')

const app = express();
const publicPath = path.join(__dirname,'public')


// app.use(express.static(publicPath));

app.set('view engine','ejs');

app.get('',(_,res) => {
    res.sendFile(`${publicPath}/home.html`)
})

app.get('/bareme',(_,res) => {
    res.sendFile(`${publicPath}/about.html`)
})

app.get('/profile',(_,res) => {
    const user = {
        name : "deepak mali",
        city : 'rani',
        email : 'dk@gmail.com',
        skills : ['php','js','c++','java','js','c','ruby']
    };
    res.render('profile',{user})
})

app.get('/login',(_,res) => {
    res.render('login');
})


app.get('*',(_,res) => {
    res.sendFile(`${publicPath}/nopage.html`)
})

app.listen(4500);