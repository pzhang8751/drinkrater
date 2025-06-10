
import drinkData from "@/app/drinkdata.json"
import DrinkDisplayCard from "@/app/components/drinkdisplaycard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Browse All ",
    description: "Search all drinks"
};

interface Drink {
    brand : string
    type : string
}

interface DrinkData {
    drinks : {
        [key : string] : Drink
    }
}

function createButtons(identifier: string) {
    let data : DrinkData = drinkData

    return (
        <>
            {Object.keys(data.drinks).reduce<JSX.Element[]>((array, drink) => {
                if (data.drinks[drink].brand === identifier) {
                    let description = data.drinks[drink].type
                    const card = <DrinkDisplayCard key={"display_" + drink} params={{drinkName: drink, subText: description}}></DrinkDisplayCard>
                    array.push(card)
                }
                
                return array; 
            }, [])}
        </>
    );
}

export default function Page({params}:{
    params:{
        identifier:string
    }
}) {
    return (
        <main>
            <section className="pt-16 flex flex-col items-center *:mt-4">
                <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">{decodeURI(params.identifier[0].toUpperCase()+params.identifier.slice(1))}</h1>
                <hr className="w-[90%] border-black border"/>
            </section>
            <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-y-6">
                {createButtons(decodeURI(params.identifier))}
            </section>
        </main>
    );
}