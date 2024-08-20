
import Link from "next/link";
import drinkData from "@/app/drinkdata.json"

function links(category: string) {
    {/** Right now its going to display random links for both type and brand */}
    let array = drinkData.types; 
    if (category==="brand") array = drinkData.brands; 

    const linkArrayData = []; 

    /** This is adding 5 random links to the types / brands section by removing a random type/ brand from the array */
    //THIS IS THE PROBLEM AREA HAHAHAHHAHAHHAHAHAH random things / editing the array mess with server
    for (let i=0; i<5 && array.length>0; i++) {
        // linkArrayData[i] = array.splice(Math.floor(Math.random()*array.length),1)[0];
        //temp fix
        linkArrayData[i] = array[i];
    }

    return (
        <>
            {linkArrayData.map((data) => {
                console.log(data);
                return (<Link key={"browse_link_" + data} href={"/browse/" + category + "/" + data} className="hover:underline">{data[0].toUpperCase()+data.slice(1)}</Link>);
            })}
        </>


    );
}


export default function BrowseDropdown() {
    return (
        <div className="w-screen bg-white fixed z-10 top-16 flex flex-row border-b-black border-b-2">
            <div className="min-w-5 max-w-10 grow"></div>
            <div className="flex flex-col gap-y-2">
                <p className="mt-1 font-bold">Types</p>
                {links("type")}
                <Link href="/browse/type" className="mb-1 font-semibold hover:underline">All types</Link>
            </div>
            <div className="min-w-5 max-w-10 grow"></div>
            <div className="flex flex-col gap-y-2">
                <p className="mt-1 font-bold">Brands</p>
                {links("brand")}
                <Link href="/browse/brand" className="mb-1 font-semibold hover:underline">All brands</Link>
            </div>
            {/** GIVING ME HYDRATION ERROR???? LOLLLLLLASLMSDJSKDKDSLMAFOOOOOOOOIM CRYING. */}




        </div>

    );

}