
export async function getBrowseData(search: string | undefined) {
  // need to change localhost to the actual webpage when i deploy
  let apiRoute = "http://localhost:3000/api/get-browse-data?"

  if (search !== undefined) {
    apiRoute += `search=${search}`
  }

  const res = await fetch(apiRoute, {method:"GET"})

  return res.json()
}

