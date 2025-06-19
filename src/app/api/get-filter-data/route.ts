
import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import { env } from "process";

const uri = env.MONGODB_URL;
let client: MongoClient; 
if (uri) {
    client = new MongoClient(uri);
}

export async function GET(request: NextRequest) { 
  try {
    await client.connect();

    const searchParams = request.nextUrl.searchParams;
    const search = searchParams.get("search");

    const db = client.db("main_data").collection("drink_collection");
    let query = {}; 

    if (search !== null) {
        query = { name: { $regex: `${search}`, $options: "i"} };
    }

    const brandArray = await db.distinct("brand", query)
    const typeArray = await db.distinct("type", query)
    
    return NextResponse.json({brands: brandArray, types: typeArray})
  } catch (e: any) {
    return NextResponse.json({error: "Internal Server Error"})
  } finally {
    await client.close();
  }
}
