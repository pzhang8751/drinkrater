
import { NextResponse, NextRequest } from "next/server";
import { MongoClient } from "mongodb";
import { env } from "process";

const uri = env.MONGODB_URL;
let client: MongoClient;
if (uri) {
  client = new MongoClient(uri);
}

export async function PUT(request: NextRequest) {
  try {
    await client.connect()

    const db = client.db("main_data").collection("drink_collection")
    const params = request.nextUrl.searchParams
    const drink = params.get("drink")
    const stars = Number(params.get("stars"))

    if (drink == null || isNaN(stars)) {
        throw Error
    }

    await db.updateOne({"name" : decodeURI(drink)}, {$inc: {total_stars: stars, total_reviews: 1}})

    return NextResponse.json({ result: "success" })
  } catch (e: any) {
    return NextResponse.json({ error: "Internal Server Error" })
  } finally {
    await client.close()
  }
}