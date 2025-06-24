"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { RefObject } from "react";
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
  const typeForm = useRef<HTMLFormElement>(null);

  function submitBrand() {
    if (brandForm.current != null) {
      const formData = new FormData(brandForm.current);

      const brandValues = formData.getAll("brand");
      const typeValues = formData.getAll("type");
      const search = searchParams.get("search");

      if (search != null) {
        url.append("search", search);
      }

      brandValues.forEach((brand) => {
        url.append("brand", brand.toString());
      });

      typeValues.forEach((type) => {
        url.append("type", type.toString());
      });

      router.replace(`/browse?${url.toString()}`);
    }
  }

  function submitType() {
    if (typeForm.current != null) {
      const formData = new FormData(typeForm.current);

      const brandValues = formData.getAll("brand");
      const typeValues = formData.getAll("type");
      const search = searchParams.get("search");

      if (search != null) {
        url.append("search", search);
      }

      brandValues.forEach((brand) => {
        url.append("brand", brand.toString());
      });
      
      typeValues.forEach((type) => {
        url.append("type", type.toString());
      });

      router.replace(`/browse?${url.toString()}`);
    }
  }

  function resetForm(ref: RefObject<HTMLFormElement>) {
    if (ref.current != null) {
      ref.current.reset();
    }
  }

  function createBrands() {
    return data.brands.map((brand) => {
      return (
        <div key={`check_${brand}`}>
          <input
            type="checkbox"
            id={`check_${brand}`}
            name="brand"
            value={brand}
            className="mr-2 hover:cursor-pointer"
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
            name="type"
            value={type}
            className="mr-2 hover:cursor-pointer"
            onClick={submitType}
          ></input>
          <label htmlFor={`check_${type}`}>{type}</label>
        </div>
      );
    });
  }

  return (
    <div className="w-20 pr-2 md:w-40 md:mr-4 md:border-r [&>h2]:font-semibold [&>h2]:text-md [&>h2]:md:text-xl flex flex-col gap-y-2">
      <h1 className="font-bold w-16 md:w-48 text-xl md:text-5xl">Filter</h1>
      <h2>Brand</h2>
      <form ref={brandForm} className="flex flex-col">
        {createBrands()}
        <button
          onClick={(e) => {
            e.preventDefault();
            resetForm(brandForm);
            submitBrand();
          }}
          className="place-self-start hover:cursor-pointer hover:text-orange-500 hover:underline underline-offset-2"
        >
          Reset
        </button>
      </form>
      <h2>Type</h2>
      <form ref={typeForm} className="flex flex-col">
        {createTypes()}
        <button
          onClick={(e) => {
            e.preventDefault();
            resetForm(typeForm);
            submitType();
          }}
          className="place-self-start hover:cursor-pointer hover:text-orange-500 hover:underline underline-offset-2"
        >
          Reset
        </button>
      </form>
    </div>
  );
}
