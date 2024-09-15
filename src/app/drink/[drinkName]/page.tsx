
import drinkData from '@/app/drinkdata.json';
import Link from 'next/link'
import ReviewButton from '@/app/ui/reivewbutton';
import Image from 'next/image';

import { fetchDrinkData } from "@/lib/data";
import StarDisplay from "@/app/ui/stardisplay";
import TagDisplay from '@/app/ui/tagdisplay';

/** Binary Search JSON Data, returns index of correct drink */
let binarySearch = function (arr: any, drink: string, start: number, end: number) {
    if (start > end) return -1;
    let mid = Math.floor((start + end) / 2);

    if (arr[mid].name === drink) return mid;

    if (arr[mid].name[0] > drink[0]) return binarySearch(arr, drink, start, mid - 1);
    else return binarySearch(arr, drink, mid + 1, end);
}

export const revalidate = 60; 

export const dynamicParams = true

export async function generateStaticParams() {
    let drinks = drinkData.drinks.map((drink) => ({
        drinkName : drink.name
    }))
    // console.log(drinks)
    return drinks
}

export default async function Page({params} : {
    params: {
        drinkName : string
    }
}) {
    let drink = drinkData.drinks[binarySearch(drinkData.drinks, decodeURI(params.drinkName), 0, drinkData.drinks.length - 1)]; 
    const reviewData = await fetchDrinkData(drink.name);
    // console.log(drink.name);
    let averageStars;
    // logic to determine the average star rating for the drink
    if (reviewData.length == 0) {
        averageStars = 0
    } else {
        let starRating = 0;
        reviewData.forEach((data) => {
            starRating += data['stars'];
        })
        // rounding the average rating to the closest 0.5 
        averageStars = (Math.round(starRating / reviewData.length * 2) / 2)
    }
    // logic to determine which tags to include 
    const tagCount : any = {} 
    const tagsDisplay = []

    if (reviewData.length > 0) {
        drinkData.tags.forEach((tag) => {
            tagCount[tag] = 0; 
        })

        reviewData.forEach((data) => {
            console.log(Array.from(data['tags']))
            data['tags'].forEach((tag:string) => {
                tagCount[tag] = tagCount[tag] + 1
            })
        })

        for (const key in tagCount) {
            if (tagCount[key] / reviewData.length >= 0.75) {
                tagsDisplay.push(key)
            }
        }
    }
    // console.log("review length " + reviewData);
    // console.log("Average Stars " + averageStars);

    return (
        <main className="mt-10 grid grid-cols-1 sm:grid-cols-2 px-16 gap-y-5 gap-x-5">
            <div className="h-72 sm:h-96 md:h-128 border border-black relative">
                <Image fill={true} style={{objectFit:'contain'}} src={'/drinkImages/' + drink.name + '.jpg'} alt={"Image of " + drink.name}/> 
            </div>
            <div className="flex flex-col gap-y-3">
                <div>
                    <h1 className="font-bold text-2xl sm:text-5xl ">
                        {drink.name}
                    </h1>
                    <Link href={"/browse/brand/" + drink.brand}>
                        <h2 className="mt-1 text-xl sm:text-3xl">
                            {drink.brand}
                        </h2>
                    </Link>
                </div>
                <StarDisplay params={{
                    stars: averageStars
                }} ></StarDisplay>
                <TagDisplay params={{
                    tags: tagsDisplay
                }}></TagDisplay>
                <ReviewButton params={{
                    name: drink.name
                }}></ReviewButton>
            </div>
            <div className="h-20 col-span-1 sm:col-span-2"></div>
            
        </main>
    );
}