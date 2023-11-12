const express = require('express')
require('./config')
const playlist = require('./playlist')

const app = express();
app.use(express.json())

app.get("/search/:key", async (req,res) => {
    console.log(req.params.key)
    let data = await playlist.find(
        {
            "$or":[
                { "name" : {$regex:req.params.key}},
                { "from":{$regex:req.params.key}}
            ]
        }
    )
    res.send(data)
})

app.listen(5000)