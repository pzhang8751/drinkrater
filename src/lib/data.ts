import { sql } from '@vercel/postgres'

export async function fetchStarData(drinkName: string) {
    try {
        const data = await sql`SELECT stars FROM total_stars WHERE drinkname=${drinkName};`
        if (data.rows.length === 0) {
            return 0;
        }

        const count = await sql`SELECT COUNT(*) AS total FROM ratings WHERE drinkname=${drinkName};`

        const stars = parseFloat(data.rows[0].stars)
        const total = parseInt(count.rows[0].total)

        return stars / total;
    } catch (error) {
        console.log(error);
        // throw new Error('Failed to fetcnh drink data for ' + drinkName)
    }
}