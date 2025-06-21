"use client";

import Form from "next/form";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { Ref, RefObject } from "react";
import FilterCheckbox from "./filtercheckbox";
import { use, useRef } from "react";

type Data = {
  brands: string[];
  types: string[];
};

export default function BrowseFilter({
  filterData,
}: {
  filterData: Promise<Data>;
}) {
  const data = use(filterData);

  const router = useRouter();
  const searchParams = useSearchParams();

  const url = new URLSearchParams();

  const brandForm = useRef<HTMLFormElement>(null);
  const typeForm = useRef();

  function submitBrand() {
    if (brandForm.current != null) {
      const formData = new FormData(brandForm.current);

      const values = formData.getAll("brand");
      const search = searchParams.get("search");

      if (search != null) {
        url.append("search", search);
      }

      values.forEach((brand) => {
        url.append("brand", brand.toString());
      });

      router.replace(`/browse?${url.toString()}`);
    }
  }

  function submitType() {}

  function resetForm(ref: RefObject<HTMLFormElement>) {
    if (ref.current != null) {
      ref.current.reset();
    }
  }

  function createFilter() {}

  function createBrands() {
    return data.brands.map((brand) => {
      return (
        <div key={`check_${brand}`}>
          <input
            type="checkbox"
            id={`check_${brand}`}
            name="brand"
            value={brand}
            className="mr-2"
            onClick={submitBrand}
          ></input>
          <label htmlFor={`check_${brand}`}>{brand}</label>
        </div>
      );
    });
  }

  function createTypes() {
    return data.types.map((type) => {
      return (
        <div key={`check_${type}`}>
          <input
            type="checkbox"
            id={`check_${type}`}
            name={type}
            className="mr-2"
          ></input>
          <label htmlFor={`check_${type}`}>{type}</label>
        </div>
      );
    });
  }

  return (
    <div className="w-16 md:w-48 border-r [&>h2]:font-semibold [&>h2]:text-md [&>h2]:md:text-xl ">
      <h1 className="font-bold w-16 md:w-48 text-xl md:text-5xl">Filter</h1>
      <h2>Brand</h2>
      <form ref={brandForm} className="flex flex-col">
        {/* <div>
          <input
            type="checkbox"
            className="mr-2"
            id="check_brand"
            name="all"
          ></input>
          <label htmlFor="check_brand">All</label>
        </div> */}
        {createBrands()}
        <button
          onClick={(e) => {
            e.preventDefault();
            resetForm(brandForm);
            submitBrand();
          }}
        >
          Reset filters
        </button>
      </form>
      <h2>Type</h2>
      {/* <Form action={filterType}>
        <div>
          <input
            type="checkbox"
            className="mr-2"
            id="check_type"
            name="all"
          ></input>
          <label htmlFor="check_type">All</label>
        </div>
        {createTypes()}
      </Form> */}
    </div>
  );
}
