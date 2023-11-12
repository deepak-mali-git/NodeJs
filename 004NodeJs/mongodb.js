const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const database = "youtube";
const client = new MongoClient(url);

async function dbConnect() {
  let result = await client.connect();
  let db = result.db(database);
  return (collection = db.collection("playlist"));
}

module.exports= dbConnect;