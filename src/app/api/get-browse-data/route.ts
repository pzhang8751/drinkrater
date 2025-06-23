
import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import { env } from "process";

const uri = env.MONGODB_URL;
let client: MongoClient; 
if (uri) {
    client = new MongoClient(uri);
}

type Query = {
  name? : object
  brand? : object
  type? : object
}

export async function GET(request: NextRequest) { 
  try {
    await client.connect();

    const searchParams = request.nextUrl.searchParams;
    const search = searchParams.get("search");
    const brand = searchParams.getAll("brand");
    const type = searchParams.getAll("type")

    // let page = Number(searchParams.get("page"));

    const db = client.db("main_data").collection("drink_collection");
    let query: Query = {}; 

    if (search !== null) {
        query.name = { $regex: `${search}`, $options: "i"} ;
    }

    if (brand.length > 0) {
      query.brand = {$in: brand}
    }

    if (type.length > 0) {
      query.type = {$in: type}
    }

    // 20 is the max number of searches per page currently
    // if (!isNaN(page)) {
    //     page = (page-1)*20; 
    // } else {
    //     page = 0; 
    // }

    // finding the first 20 after skipping the necessary number depending on the page number
    // add back .skip after this first part works
    const array = await db.find(query).limit(20).toArray()

    return NextResponse.json(array)
  } catch (e: any) {
    //console.log(e.stack);
    return NextResponse.json({error: "Internal Server Error"})
  } finally {
    await client.close();
  }
}
