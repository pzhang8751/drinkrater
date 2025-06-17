import SearchBar from "../components/searchbar";
import BrowseDisplay from "../components/browsedisplay";
import React, { Suspense } from "react";

import { ImSpinner6 as Spinner } from "react-icons/im";

export default async function Browse({
  searchParams,
}: {
  searchParams: Promise<{ search: string | undefined}>;
}) {

  const {search} = await searchParams; 

  return (
    <main className="min-h-screen py-16">
      {/* toy around with the top design being fixed */}
      {/* fixed bg-white w-full z-10 border-b pb-4 (for p)*/}
      {/* could also add a button that goes to the top when u the search bar goes past the visible area */}
      <SearchBar></SearchBar>
      <Suspense fallback={<LoadingDisplay></LoadingDisplay>}>
        <BrowseDisplay search={search}></BrowseDisplay>
      </Suspense>

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
  )
}
