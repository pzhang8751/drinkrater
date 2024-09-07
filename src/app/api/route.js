
export async function POST(req) {

    let res = {message: 'Invalid Request'}
    const data = await req.formData()
    
    // const party = document.getElementById("Parties").value;
    // console.log(party)



    res = {message: 'Saved Successfully'}
    return Response.json(res)
}