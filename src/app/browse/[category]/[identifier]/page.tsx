import drinkdata from '@/app/drinkdata.json'

import drinkData from "@/app/drinkdata.json"
import DrinkDisplayCard from "@/app/ui/drinkdisplaycard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Browse All ",
    description: "Search all drinks"
};

function createButtons(category: string, identifier: string) {
    return (
        <>
            {drinkData.drinks.filter((drink) => {
                let id = drink.brand
                if (category==="type") id = drink.type; 
                if (id === identifier) return drink; 
            }).map((drink) => {
                let description = drink.brand
                if (category==="brand") description = drink.type;
                return (
                    <DrinkDisplayCard key={"display_card_"+drink.name} params={{
                        drinkName: drink.name,
                        subText: description
                    }}/>
                );
            })}
        </>
    );
}

export default function Page({params}:{
    params:{
        category:string,
        identifier:string
    }
}) {
    return (
        <main>
            <div className="flex flex-col items-center">
                <h1 className="mt-10 font-bold text-3xl sm:text-4xl md:text-5xl">{decodeURI(params.identifier[0].toUpperCase()+params.identifier.slice(1))}</h1>
                <hr className="mt-10 w-[calc(100vw-12rem)] border-black border-1"/>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-y-6">
                {createButtons(params.category, decodeURI(params.identifier))}
            </div>
        </main>
    );
}