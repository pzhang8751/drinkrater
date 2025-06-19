import SearchBar from "../components/searchbar";
import BrowseDisplay from "../components/browsedisplay";
import BrowseFilter from "../components/browsefilter";
import React, { Suspense } from "react";

import { ImSpinner6 as Spinner } from "react-icons/im";
import { getBrowseData, getFilterData } from "@/lib/db";

export default async function Browse({
  searchParams,
}: {
  searchParams: Promise<{ search: string | undefined }>;
}) {
  const { search } = await searchParams;

  const browseData = await getBrowseData(search);
  const filterData = await getFilterData(search); 

  return (
    <main className="min-h-screen py-16">
      {/* toy around with the top design being fixed */}
      {/* fixed bg-white w-full z-10 border-b pb-4 (for p)*/}
      {/* could also add a button that goes to the top when u the search bar goes past the visible area */}
      <SearchBar></SearchBar>

      <div className="flex flex-row *:mt-4 *:md:mt-10 pl-4 md:pl-10">
        {/* need to add suspense */}
        <BrowseFilter filterData={filterData}></BrowseFilter>
        <Suspense fallback={<LoadingDisplay></LoadingDisplay>}>
          <BrowseDisplay data={browseData}></BrowseDisplay>
        </Suspense>
      </div>

      {/* ADD THE PAGE CHOOSE UNDERNEATH THIS WOWWW so that it can be client side while the browse display is server side*/}
    </main>
  );
}

function LoadingDisplay() {
  return (
    <div className="h-[50vh] w-full flex flex-row justify-center items-center">
      <Spinner className="animate-spin mr-10" size={75}></Spinner>
      <p className="font-bold text-3xl">Loading ...</p>
    </div>
  );
}
