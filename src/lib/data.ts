
import { sql } from '@vercel/postgres'

export async function fetchDrinkData(drinkName : string) {
    try {
        const data = await sql`SELECT stars, ratings FROM ratings WHERE drinkname=${drinkName};`;
        return data.rows;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch drink data for ' + drinkName)
    }
}