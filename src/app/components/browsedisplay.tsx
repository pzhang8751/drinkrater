"use client";

import React from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import data from "@/app/drinkdata.json";
import Link from "next/link";
import { useState } from "react";

type Drink = {
  name: string;
  brand: string;
  type: string;
};

export default async function BrowseDisplay() {

  const searchParams = useSearchParams();
  const param = searchParams.get("search");
  let searchInput = "";
  let drinks: Drink[] = [];
  // set a useState for brands that changes when we check and uncheck boxes
  // need to think about initial / update logic more carefully - think about useEffect() 
  let brands = new Map();
  let types = new Map();


  if (param !== null) {
    searchInput = param;
  }

  if (searchInput !== "") {
    let i = 0;
    let index = 0;
    while (i < 16 && i < data.length) {
      if (data[i].name.toLowerCase().includes(searchInput.toLowerCase())) {
        drinks[index] = data[i];
        index++;
      }
      i++;
    }
  } else {
    for (let i = 0; i < 16 && i < data.length; i++) {
      drinks[i] = data[i];
    }
  }

  function cards() {
    if (drinks.length > 0) {
      return (
        <div className="grow gap-x-10 grid grid-cols-4 gap-y-8 justify-items-center">
          {drinks.map((drink) => {
            if (brands.has(drink.brand)) {
              brands.set(drink.brand, brands.get(drink.brand) + 1);
            } else {
              brands.set(drink.brand, 1);
            } 

            if (types.has(drink.type)) {
              types.set(drink.type, types.get(drink.type) + 1);
            } else {
              types.set(drink.type, 1);
            }

            return (
              <Card
                key={`${drink.name}_card`}
                brand={drink.brand}
                name={drink.name}
              ></Card>
            );
          })}
        </div>
      );
    }

    return <p className="italic">No drinks match search</p>;
  }

  function brandCheckList() {
    return (
      <form>
        {/* {brands.keys().map((key) => {
          console.log(key);
          return (
            <React.Fragment key={key}>
              <input type="checkbox" id={key}></input>
              <label htmlFor={key}>{key}</label>
            </React.Fragment>
          );
        })} */}
      </form>
    );
  }

  function typeCheckList() {}

  return (
    <div className="flex flex-row gap-x-12 *:pt-10">
      <div className="w-48 border-r [&>h2]:font-semibold [&>h2]:text-xl">
        <h2>Brand</h2>
        {brandCheckList()}
        <h2>Type</h2>
      </div>
      {cards()}
    </div>
  );
}

function Card({ brand, name }: { brand: string; name: string }) {
  return (
    <Link href={`/drink/${name}/${brand}/type`}>
      <div className="min-h-max min-w-max flex-col px-3 py-3 border-black border transition hover:-translate-y-3 hover:shadow-md shadow-black">
        <Image
          src="/drinkImages/Coca-Cola.jpg"
          alt="image of drink"
          width={200}
          height={400}
          className="border border-black mb-3"
        />
        <p>{brand}</p>
        <p className="font-semibold">{name}</p>
      </div>
    </Link>
  );
}
