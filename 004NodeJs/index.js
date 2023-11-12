const dbConnect = require('./mongodb')


// console.warn(dbConnect())

// dbConnect().then((resp) => {
//   resp
//     .find().toArray().then((data) => {
//       console.warn(data);
//     }); 
// });

const main = async () => {
    let data = await dbConnect();
    data = await data.find({name:"third"}).toArray();
    console.warn(data)

}

main();