'use server'

import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

// console.log({
//   POSTGRES_URL: process.env.POSTGRES_URL,
//   POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING
// });

export async function POST(req: NextRequest) {
  const data = await req.json();
  const name = data["name"];
  const stars = data["stars"];
  const tags = data["tags"];
  const comment = data["comment"];
  const date = Date.toString()

  try {
    if (!name) {
      throw new Error("Drink name must be declared!")
    }
    if (stars <= 0) {
      throw new Error("Please pick a star rating!")
    }
    await sql`INSERT INTO ratings VALUES (${name}, ${stars}, ${tags}, ${comment});`;
    await sql`INSERT INTO total_stars (drinkname, stars) VALUES (${name}, ${stars}) ON CONFLICT (drinkname) DO UPDATE SET stars=${stars}+total_stars.stars`
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
  
  const drink = await sql`SELECT * FROM Ratings;`;
  return NextResponse.json({ drink }, { status: 200 });
}