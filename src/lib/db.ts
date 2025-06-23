export async function getBrowseData(
  search: string | undefined,
  brands: string[] | undefined,
  types: string[] | undefined
) {
  // need to change localhost to the actual webpage when i deploy
  let apiRoute = "http://localhost:3000/api/get-browse-data?";

  // need to change is so that brands handles case where brand is just one

  const url = new URLSearchParams();

  // console.log("Search " + search)
  // console.log("brands " + brands)
  // console.log("types " + types)

  if (search !== undefined) {
    url.append("search", search);
  }

  if (brands !== undefined) {
    brands.forEach((brand) => {
      url.append("brand", brand);
    });
  }

  if (types !== undefined) {
    types.forEach((type) => {
      url.append("type", type);
    });
  }

  apiRoute += url.toString();

  const res = await fetch(apiRoute, { method: "GET" });

  return res.json();
}

export async function getFilterData(search: string | undefined) {
  let apiRoute = "http://localhost:3000/api/get-filter-data";

  if (search !== undefined) {
    apiRoute += `?search=${search}`;
  }

  const res = await fetch(apiRoute, { method: "GET" });

  return res.json();
}

export async function getAverageStars(name: string) {
  const apiRoute = `http://localhost:3000/api/get-star-data?drink=${name}`;

  const res = await fetch(apiRoute, { method: "GET" });

  return res.json();
}

export async function getTopComments(name: string) {
  const apiRoute = `http://localhost:3000/api/get-top-comments?drink=${name}`;

  const res = await fetch(apiRoute, { method: "GET" });

  return res.json();
}
