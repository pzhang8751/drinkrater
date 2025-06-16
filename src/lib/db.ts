import { MongoClient } from "mongodb";
import { env } from "process";

const uri = env.MONGODB_URL;
let client: MongoClient;
if (uri) {
  client = new MongoClient(uri);
}

export async function getData(search: string | undefined) {
  try {
    await client.connect();

    const db = client.db("main_data").collection("drink_collection");
    let query = {};

    if (search !== undefined) {
      query = { name: { $regex: `${search}`, $options: "i" } };
    }

    const array = await db.find(query).limit(20).toArray()

    return array; 
  } catch {
  } finally {
    await client.close();
  }
}
