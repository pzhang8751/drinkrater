

import drinkData from '@/app/drinkdata.json';
import Link from 'next/link'
import ReviewButton from '@/app/ui/reivewbutton';

import { fetchDrinkData } from "@/lib/data";
import StarRating from "@/app/ui/starrating";

/** Binary Search JSON Data, returns index of correct drink */
let binarySearch = function (arr: any, drink: string, start: number, end: number) {
    if (start > end) return -1;
    let mid = Math.floor((start + end) / 2);

    if (arr[mid].name === drink) return mid;

    if (arr[mid].name[0] > drink[0]) return binarySearch(arr, drink, start, mid - 1);
    else return binarySearch(arr, drink, mid + 1, end);
}

export default async function Page({ params }: {
    params: {
        drinkName: string
    }
}) {
    let drink = drinkData.drinks[binarySearch(drinkData.drinks, decodeURI(params.drinkName), 0, drinkData.drinks.length - 1)];

    const reviewData = await fetchDrinkData(drink.name);
    let averageStars;

    // logic to determine the average star rating for the drink
    if (reviewData.length == 0) {
        averageStars = 0
    } else {
        let starRating = 0;
        reviewData.map((data) => {
            starRating += parseFloat(data['stars']);
        })
        // rounding the average rating to the closest 0.5 
        averageStars = (Math.round(starRating / reviewData.length * 2) / 2)
    }
    // console.log("review length " + reviewData);
    // console.log("Average Stars " + averageStars);

    return (
        <main className="mt-10 grid grid-cols-1 sm:grid-cols-2 px-16 gap-y-5 gap-x-5">
            <div className="h-72 border border-black">
                {/** decide whether to use Next Image or img */}
            </div>
            <div className="flex flex-col gap-y-5">
                <div>
                    <h1 className="font-bold text-xl sm:text-5xl ">
                        {drink.name}
                    </h1>
                    <Link href={"/browse/brand/" + drink.brand}>
                        <h2 className="mt-1 text-lg sm:text-3xl">
                            {drink.brand}
                        </h2>
                    </Link>
                </div>
                <StarRating params={{
                    stars: averageStars
                }} ></StarRating>
                <ReviewButton params={{
                    name: drink.name
                }}></ReviewButton>
            </div>
            
        </main>
    );
}