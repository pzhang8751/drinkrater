import drinkData from "@/app/drinkdata.json";
import BrowseButton from "@/app/ui/browsebutton";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Browse Drink Types",
    description: "Search drinks by type"
};

function createButtons() {
    return (
        <>
            {drinkData.types.map((type) => {
                const typeString = type[0].toUpperCase()+type.slice(1);
                return (
                    <BrowseButton key={type} pathName={"/browse/type/"+type} buttonName={typeString}/>
                );
            })}
        </>
    );
}

export default function Page() {
    return (
        <main>
            <div className="mt-8 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 place-items-center gap-y-4">
                {createButtons()}
            </div>
        </main>
    ); 
}