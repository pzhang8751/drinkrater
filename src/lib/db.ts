export async function getBrowseData(
  search: string | undefined,
  brands: string[] | undefined,
  types: string[] | undefined
) {
  // need to change localhost to the actual webpage when i deploy
  let apiRoute = `${process.env.NEXT_PUBLIC_API_URL}/api/get-browse-data?`;

  const url = new URLSearchParams();

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
  let apiRoute = `${process.env.NEXT_PUBLIC_API_URL}/api/get-filter-data`;

  if (search !== undefined) {
    apiRoute += `?search=${search}`;
  }

  const res = await fetch(apiRoute, { method: "GET" });

  return res.json();
}

export async function getAverageStars(name: string) {
  const apiRoute = `${process.env.NEXT_PUBLIC_API_URL}/api/get-star-data?drink=${name}`;

  const res = await fetch(apiRoute, { method: "GET" });

  return res.json();
}

export async function getTopComments(name: string) {
  const apiRoute = `${process.env.NEXT_PUBLIC_API_URL}/api/get-top-comments?drink=${name}`;

  const res = await fetch(apiRoute, { method: "GET" });

  return res.json();
}
