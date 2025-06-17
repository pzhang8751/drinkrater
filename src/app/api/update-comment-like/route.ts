
import { NextResponse, NextRequest } from "next/server";
import { MongoClient, ObjectId } from "mongodb";
import { env } from "process";

const uri = env.MONGODB_URL;
let client: MongoClient;
if (uri) {
  client = new MongoClient(uri);
}

// need to add feature where like is associated with account after creating account 

export async function PUT(request: NextRequest) {
  try {
    await client.connect()

    const db = client.db("main_data").collection("reviews")
    const params = request.nextUrl.searchParams
    const id = params.get("id")

    await db.updateOne({_id : new ObjectId(id ? id : "")}, {$inc: {likes: 1}})

    return NextResponse.json({ result: "success" })
  } catch (e: any) {
    return NextResponse.json({ error: "Internal Server Error" })
  } finally {
    await client.close()
  }
}