
export async function POST(req) {
    let res = {message: 'Invalid Request'}
    const data = await req.formData()


    
    res = {message: 'Saved Successfully'}
    return Response.json(res)
}