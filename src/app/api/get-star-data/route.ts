import { MongoClient } from "mongodb";
import { NextResponse, NextRequest } from "next/server";
import { env } from "process";

const uri = env.MONGODB_URL;
let client: MongoClient;
if (uri) {
  client = new MongoClient(uri);
}

export async function GET(request: NextRequest) {
  try {
    await client.connect();

    const db = client.db("main_data").collection("drink_collection");
    const drink = request.nextUrl.searchParams.get("drink");
    const data = await db.findOne({ name: drink });

    let averageStars = 0; 

    if (data !== null) {
      const stars = data.total_stars;
      const reviews = data.total_reviews;

      // calculating average stars roudned to nearest half
      averageStars = Math.round((stars / reviews) * 2) / 2;

      averageStars = isNaN(averageStars) ? 0 : averageStars;
    }

    return NextResponse.json(averageStars);
  } catch {
    return NextResponse.json({ error: "Internal Server error" });
  } finally {
    await client.close();
  }
}
