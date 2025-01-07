import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    try {
        const result = await sql`CREATE TABLE Ratings ( DrinkName varchar(255), Stars float8, Tags text[], Comment varchar(255));`;
        return NextResponse.json({ result }, {status: 200});
    } catch (error) {
        return NextResponse.json({ error }, {status:500});
    }
}