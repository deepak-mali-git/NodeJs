const express = require('express');
const dbConnect = require('./mongodb');
const mongodb = require('mongodb')
const app = express();

app.use(express.json())

app.get('/', async (req,resp) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    resp.send(data)
});


app.post('/',async (req,resp) => {
    let data = await dbConnect();
    let result = await data.insertOne(req.body)
    resp.send(result)
    console.log(req.body)
})

app.put('/:name', async (req,resp) => {

    let data = await dbConnect();
    let result = await data.updateOne(
        {name:req.params.name},
        {$set:req.body}
    )
    
    console.log(result)
    resp.send(result)
})


app.delete('/', async (req,resp) => {
    let data = await dbConnect()
    let result = await data.deleteOne({_id : new mongodb.ObjectId(req.body.id)})
    console.log(result)
    resp.send(result)
})




app.listen(5000);   