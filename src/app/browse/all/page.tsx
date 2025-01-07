import type { Metadata } from "next";
import drinkData from "@/app/drinkdata.json"
import DrinkDisplayCard from "@/app/components/drinkdisplaycard";

export const metadata: Metadata = {
    title: "Browse All Drinks",
    description: "Search all drinks"
};

function createButtons() {
    return (
        <>
            {drinkData.drinks.map((drink) => {
                return (
                    <DrinkDisplayCard key={"display_card_"+drink.name} params={{
                        drinkName: drink.name,
                        subText: drink.brand
                    }}/>
                );
            })}
        </>
    );
}


export default function Page() {
    return (
        <main>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-y-6">
                {createButtons()}
            </div>
        </main>
    )
}