const dbConnect= require('./mongodb')

const insert = async () => {
    const db = await dbConnect();
    const result = await db.insertOne({name:"fourth",length:50,from:"whatsapp"})

        if(result.acknowledged)
        console.warn(result)

        else 
        console.warn("something done wrong")
}

insert();