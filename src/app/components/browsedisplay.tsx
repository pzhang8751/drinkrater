"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
// import data from "@/app/drinkdata.json";
import Link from "next/link";

type Drink = {
  name: string;
  brand: string;
  type: string;
};

export default function BrowseDisplay() {
  const [data, setData] = useState<Drink[] | null>(null);
  const searchParams = useSearchParams().toString();

  useEffect(() => {
    if (searchParams == null) return;

    fetch(`/api/fetch-browse-data?${searchParams}`)
      .then((res) => res.json())
      .then(setData);
  }, [searchParams]);

  // let brands: string[] = [];
  // let type: string[] = [];

  function cards() {
    if (data !== null) {
      if (data.length > 0) {
        return (
          <div className="grow gap-x-10 grid grid-cols-4 gap-y-8 justify-items-center">
            {data.map((drink: Drink) => {
              return (
                <Card
                  key={`card_${drink.name}`}
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
    return <p className="italic">Loading...</p>;
  }

  return (
    <div className="flex flex-row gap-x-12 *:pt-10">
      <div className="w-48 border-r [&>h2]:font-semibold [&>h2]:text-xl">
        <h2>Brand</h2>
        <h2>Type</h2>
      </div>
      {cards()}
    </div>
  );
}

function Card({ brand, name }: { brand: string; name: string }) {
  return (
    <Link href="/">
      <div className="min-h-max w-[200px] flex-col px-3 py-3 border-black border transition hover:-translate-y-3 hover:shadow-md shadow-black">
        <Image
          src="/drinkImages/Coca-Cola.jpg"
          alt="image of drink"
          width={200}
          height={400}
          className="border border-black mb-3"
        />
        <p>{brand}</p>
        <p className="w-full font-semibold text-ellipsis truncate">{name}</p>
      </div>
    </Link>
  );
}
