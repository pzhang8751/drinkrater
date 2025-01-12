import { sql } from "@vercel/postgres"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
    const name = req.nextUrl.searchParams.get("name"); 
    const amount = req.nextUrl.searchParams.get("amount"); 



    try {

        const data = await sql`SELECT stars AS stars, comment AS comment
                                FROM ratings WHERE (drinkName=${name}) 
                                LIMIT ${amount}`

        // const data = await sql`SELECT stars AS stars, comment AS comment
        //                         FROM ratings WHERE (drinkName='Coca-Cola')`

        return NextResponse.json({ data }, { status: 200 })
    } catch (error) {
        // console.log(error)
        return NextResponse.json({ status: 500 })
    }


}