import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    try {
        const result = await sql`CREATE TABLE Total_Stars (DrinkName varchar(255), Stars float8);`;
        return NextResponse.json({ result }, {status: 200});
    } catch (error) {
        return NextResponse.json({ error }, {status:500});
    }
}