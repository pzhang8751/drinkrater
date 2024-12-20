import drinkData from "@/app/drinkdata.json";
import BrowseButton from "@/app/components/browsebutton";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Browse Drink Brands",
    description: "Search drinks by brand"
};

function createButtons() {
    return (
        <>
            {drinkData.brands.map((brand) => {
                return (
                    <BrowseButton key={brand} pathName={"/browse/brand/"+brand} buttonName={brand}/>
                );
            })}
        </>
    );
}

export default function Page() {
    return (
        <main>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 place-items-center gap-y-4">
                {createButtons()}
            </div>
        </main>
    );
}