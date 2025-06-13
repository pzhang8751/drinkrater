// import data from "@/app/drinkdata.json";
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
    let page = Number(searchParams.get("page"));

    const db = client.db("main_data").collection("drink_collection");
    let query = null; 

    if (search !== null) {
        query = { "name": { $regex: `${search}`, $options: "i"} };
    } else {
        query = {}; 
    }

    // 20 is the max number of searches per page currently
    if (!isNaN(page)) {
        page = (page-1)*20; 
    }

    // finding the first 20 after skipping the necessary number depending on the page number
    console.log(db.find(query).skip(page).limit(20));
    return NextResponse.json({result: "Succeded"})
  } catch (e: any) {
    console.log(e.stack);
    return NextResponse.json({error: "Internal Server Error"})
  } finally {
    await client.close();
  }

  //   const brand = searchParams.get("brand");
  //   const type = searchParams.get("type");
  // change to fetching one at a time

  // i think its fine to ask for multiple entries at a time for the browsing
  // when getting reviews - should get one review at a time
}
