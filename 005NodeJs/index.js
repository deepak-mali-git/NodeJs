const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/youtube')

const PSchema = new mongoose.Schema({
    name:String,
    length:Number,
    from:String
})

const saveInDB = async () => 
{
    
    const PModel = mongoose.model('playlist',PSchema,'playlist')
    let data = new PModel({name:"dk",length:2})
    let result = await data.save()
    console.log(result)
}

const updateInDB = async () => 
{
    const playlist = mongoose.model('playlist',PSchema,'playlist')
    let data = await playlist.updateOne(
        {name:"dk"},
        {$set:{length:99}}
    )
    console.log(data)
}


const deleteInDb = async () => 
{
    const playlist = mongoose.model('playlist',PSchema,'playlist')
    let data = await playlist.deleteOne({name:'dk'})
    console.log(data)
}

const findInDB = async () => 
{
    const playlist = mongoose.model('playlist',PSchema,'playlist')
    let data = await playlist.find({name:'dk'})
    console.log(data)
}

findInDB();