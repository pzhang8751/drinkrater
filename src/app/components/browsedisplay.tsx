"use client"

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import data from "@/app/drinkdata.json";
import Link from "next/link";

type Drink = {
    name: string, 
    brand: string, 
    type: string
}

export default function BrowseDisplay() {
    const searchParams = useSearchParams()
    const param = searchParams.get("search")
    let searchInput = ""; 
    let drinks : Drink[] = []; 
    let brands : string[] = []; 
    let type : string[] = [];

    if (param !== null) {
        searchInput = param; 
    }

    if (searchInput !== "") {
        let i = 0; 
        let index = 0; 
        while (i < 16 && i < data.length) {
            if (data[i].name.includes(searchInput)) {
                drinks[index] = data[i]
                index++; 
            }
            i++; 
        }
    } else {
        for (let i=0; i<16&&i<data.length; i++) {
            drinks[i] = data[i]; 
        }
    }
    
    return (
    <div className="flex flex-row gap-x-12 *:pt-10">
        <div className="w-48 border-r [&>h2]:font-semibold [&>h2]:text-xl">
            <h2 >
                Brand
            </h2>
            <h2 >
                Type
            </h2>
        </div>
        <div className="grow gap-x-10 grid grid-cols-4 gap-y-8 justify-items-center">
            {drinks.map((drink) => {
                return (
                    <Card brand={drink.brand} name={drink.name}></Card>
                )
            })}
        </div>
    </div>
    )

}

function Card({brand, name} : {brand:string, name:string}) {
  return (
    <Link href="/">
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