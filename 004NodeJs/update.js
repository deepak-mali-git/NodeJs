const dbConnect = require('./mongodb')

const updateData = async() => {
    let data = await dbConnect();
    let result = await data.updateMany(
        {name:"cthird"},
        {$set:{name:"third"}}
    )
    console.warn(result)
}

updateData();