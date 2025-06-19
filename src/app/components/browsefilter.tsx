"use client";

import Form from "next/form";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type Data = {
  brands: string[];
  types: string[];
};

export default function BrowseFilter({ filterData }: { filterData: Data }) {
  const router = useRouter();

  function pushFilter() {
    router.replace(usePathname() + "");
  }

  function createBrands() {
    return filterData.brands.map((brand) => {
      return (
        <React.Fragment key={`check_${brand}`}>
          <input type="checkbox" id={`check_${brand}`}></input>
          <label htmlFor={`check_${brand}`}>{brand}</label>
        </React.Fragment>
      );
    });
  }

  function createTypes() {
    return filterData.types.map((type) => {
      return (
        <React.Fragment key={`check_${type}`}>
          <input type="checkbox" id={`check_${type}`}></input>
          <label htmlFor={`check_${type}`}>{type}</label>
        </React.Fragment>
      );
    });
  }

  return (
    <div className="w-16 md:w-48 border-r [&>h2]:font-semibold [&>h2]:text-md [&>h2]:md:text-xl ">
      <h1 className="font-bold w-16 md:w-48 text-xl md:text-5xl">Filter</h1>
      <h2>Brand</h2>
      <Form action={pushFilter}>{createBrands()}</Form>
      <h2>Type</h2>
    </div>
  );
}
