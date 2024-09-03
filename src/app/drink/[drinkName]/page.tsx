"use client";

import { create } from "domain";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import drinkData from '@/app/drinkdata.json';
import Link from 'next/link'
import {pixelify} from '@/app/ui/fonts'
import Popup from "reactjs-popup";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import TagForm from "@/app/ui/tagform";

// import { openReview } from "@/app/layout";

/** Binary Search json Data, returns index of correct drink */
let binarySearch = function(arr:any, drink:string, start:number, end:number) {
    if (start > end) return -1;
    let mid = Math.floor((start+end)/2);

    if (arr[mid].name === drink) return mid; 

    if (arr[mid].name[0] > drink[0]) return binarySearch(arr, drink, start, mid-1);
    else return binarySearch(arr, drink, mid+1, end);
}

export default function Page({params}:{
    params:{
        drinkName:string
    }
}) {
    let drink = drinkData.drinks[binarySearch(drinkData.drinks, decodeURI(params.drinkName), 0, drinkData.drinks.length-1)];

    function createStars() {
        return (
            <>
            </>
        );
    }

    /**  useState for the review popup window */

    const [open, setOpen] = useState(false);
    const closeWindow = () => setOpen(false); 
    const openWindow = () => setOpen(true); 

    function submitReview() {
        closeWindow();
    }

    function reviewWindow(drinkName:string) {

        return (
            <Popup  modal open={open}>
               <div className="h-screen w-screen bg-black bg-opacity-50 grid justify-center">
                    <div className="h-3/4 w-72 sm:w-128 md:w-160 bg-white self-center rounded-lg flex flex-col overflow-y-auto">
                        <div className="mt-1 ml-1">
                            <RxCross1 onClick={closeWindow} className="hover:text-red-500 hover:cursor-pointer" size="20"/>
                        </div>
                        
                        <p className="mt-2 font-bold self-center text-lg sm:text-xl md:text-2xl">{drinkName}</p>
                        <hr className="w-5/6 my-1 border-black border-1 self-center"/>
                        <div className="ml-2">
                            {TagForm()}
                            
                        </div>
                        <button type="submit" form="tagForm" onClick={submitReview} className={`${pixelify.className} w-32 mr-2 self-end border-2 text-lg  border-black hover:border-red-500 hover:text-red-500 hover:font-bold`}>Submit</button>
                        
                        
                    </div>
                </div>
            </Popup>
        );
    }

    return (
        <main className="mt-10 grid grid-cols-1 sm:grid-cols-2 px-16 gap-y-5 gap-x-5">
            <div className="h-72 border border-black">
                {/** decide whether to use Next Image or img */}
            </div>
            <div className="flex flex-col gap-y-5">
                <div>
                    <h1 className="font-bold text-5xl ">
                        {drink.name}
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
                <button type="button" onClick={openWindow} className={`${pixelify.className} w-32 border-2 border-black hover:border-red-500 hover:text-red-500 hover:font-bold`}>Review</button>
            </div>
            {reviewWindow(drink.name)}
        </main>
    );
}