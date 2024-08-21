import { create } from "domain";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import drinkData from '@/app/drinkdata.json';
import Link from 'next/link'
import {pixelify} from '@/app/ui/fonts'

/** Binary Search json Data, returns index of correct drink */
let binarySearch = function(arr:any, drink:string, start:number, end:number) {
    if (start > end) return -1;
    let mid = Math.floor((start+end)/2);

    if (arr[mid].name === drink) return mid; 

    if (arr[mid].name[0] > drink[0]) return binarySearch(arr, drink, start, mid-1);
    else return binarySearch(arr, drink, mid+1, end);
}

function createStars() {
    return (
        <>
        </>
    );
}

export default function Page({params}:{
    params:{
        drinkName:string
    }
}) {
    let drink = drinkData.drinks[binarySearch(drinkData.drinks, decodeURI(params.drinkName), 0, drinkData.drinks.length-1)];

    return (
        <main className="mt-10 grid grid-cols-1 sm:grid-cols-2 px-16 gap-y-5 gap-x-5">
            <div className="h-72 border border-black">
                {/** decide whether to use Next Image or img */}
            </div>
            <div className="flex flex-col gap-y-5">
                <div>
                    <h1 className="font-bold text-5xl ">
                        {decodeURI(params.drinkName)}
                    </h1>
                    <Link href={"/browse/brand/" + drink.brand}>
                        <h2 className="mt-1 text-3xl">
                            {drink.brand}
                        </h2>
                    </Link>
                </div>

 
                <div>
                    {createStars()}
                    <FaRegStar />
                </div>

                <button type="button" className={`${pixelify.className} w-32 border-2 border-black hover:border-red-500 hover:text-red-500 hover:font-bold`}>Review</button>
            </div>

            
        </main>
    );
}