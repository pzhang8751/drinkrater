
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
        await client.connect()

        const db = client.db("main_data").collection("reviews")
        const data = request.nextUrl.searchParams.get("drink")
        let query = {}; 
        if (data != null) {
            query = {"name" : data}
        } else {
            throw Error;
        }

        const array = await db.find(query).sort({ _id: -1}).limit(3).toArray()

        return NextResponse.json(array)
    } catch {
        return NextResponse.json({error: "Internal Server Error"})
    } finally {
        await client.close() 
    }
}