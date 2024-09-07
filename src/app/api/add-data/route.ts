
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

console.log({
  POSTGRES_URL: process.env.POSTGRES_URL,
  POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING
});


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('drinkName');
  const stars = searchParams.get('stars');
  const tags = searchParams.get('tags')
 
  try {
    if (!name || !stars || !tags) throw new Error('Drink name and star rating required');
    await sql`INSERT INTO Ratings (DrinkName, Stars, Tags) VALUES (${name}, ${stars}, ${tags});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const drink = await sql`SELECT * FROM Ratings;`;
  return NextResponse.json({ drink }, { status: 200 });
}