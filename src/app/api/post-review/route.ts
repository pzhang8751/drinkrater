
import { NextResponse, NextRequest } from "next/server";
import { MongoClient } from "mongodb";
import { env } from "process";

const uri = env.MONGODB_URL;
let client: MongoClient;
if (uri) {
  client = new MongoClient(uri);
}

export async function POST(request: NextRequest) {
  try {
    await client.connect()

    const db = client.db("main_data").collection("reviews")
    const data = await request.json()

    await db.insertOne(data)

    return NextResponse.json({ result: "success" })
  } catch (e: any) {
    return NextResponse.json({ error: "Internal Server Error" })
  } finally {
    await client.close()
  }
}