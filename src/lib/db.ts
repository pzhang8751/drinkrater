import { MongoClient } from "mongodb";
import { env } from "process";

const uri = env.MONGODB_URL;
let client: MongoClient;
if (uri) {
  client = new MongoClient(uri);
}

type Drink = {
  total_stars: number;
  total_reviews: number;
};

export async function getStarData(drink: string) {
  await client.connect();

  const db = client.db("main_data").collection("drink_collection");

  const data = await db.findOne({ name: drink });

  if (data !== null) {
    const stars = data.total_reviews;
    const reviews = data.total_reviews;
    
    // calculating average stars roudned to nearest half
    const averageStars = Math.round((stars / reviews) * 2) / 2

    return isNaN(averageStars) ? 0 : averageStars;
  }  

  return 0;
}
