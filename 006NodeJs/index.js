const express = require('express')
require('./config')
const playlist = require('./playlist')

const app = express();
app.use(express.json())

app.post('/create', async (req,resp) => {
    let data =  new playlist(req.body)
    let result = await data.save()
    console.log(result)
    resp.send(result)
})

app.get("/list", async(req,resp) => {
    let data = await playlist.find()
    resp.send(data)
})
app.delete("/delete/:_id", async(req,resp) => {
    let data = await playlist.deleteOne(req.params)
    resp.send(data)
})

app.put("/update/:_id", async(req,resp) => {
    let data = await playlist.updateOne(
        req.params,
        {$set:{name:"changed"}}
    )
    resp.send(data)
    console.warn(data)
})

app.listen(5000)