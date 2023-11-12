const express = require('express')
require('./config')
const playlist = require('./playlist')

const app = express();
app.use(express.json())

app.listen(5000)