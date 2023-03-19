import { MongoClient, ObjectId } from "mongodb";

let client;

export async function connectToDatabase() {
  client = await MongoClient.connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return client.db("portfolio");
}

export async function insertDocument(collection, document) {
  const db = await connectToDatabase();
  const result = await db.collection(collection).insertOne(document);
  client.close();
  return result;
}

export async function getData(collection) {
  const db = await connectToDatabase();
  const data = await db
    .collection(collection)
    .find()
    .sort({ _id: -1 })
    .toArray();
  const serializedData = data.map((item) => {
    return { ...item, _id: item._id.toString() };
  });

  return serializedData;
}

export async function getOneData(collection, id) {
  const db = await connectToDatabase();
  const data = await db
    .collection(collection)
    .find({ _id: new ObjectId(id) })
    .toArray();
  const serializedData = data.map((item) => {
    return { ...item, _id: item._id.toString() };
  });

  return serializedData;
}
