"use client"

import Popup from "reactjs-popup";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import TagForm from "@/app/ui/tagform";
import { pixelify } from "./fonts";
import drinkData from "@/app/drinkdata.json"

import { useAppSelector } from "@/lib/store";
import { updateStars } from "@/lib/features/starSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store";
import { updateTag } from "@/lib/features/tagSlice";

export default function ReviewButton({params} : {params:{name:string}}) {
    const dispatch = useDispatch<AppDispatch>()
    /** window open / close */
    const [open, setOpen] = useState(false);
    const closeWindow = () => {
        setOpen(false)
        dispatch(updateStars(0))
        drinkData.tags.forEach((tag) => {
            dispatch(updateTag({id:tag, value:false}))
        })
    };
    const openWindow = () => setOpen(true);

    /** get tag states */
    const tags = useAppSelector((state) => state.tagReducer.items)
    const stars = useAppSelector((state) => state.starReducer).stars

    function getTagData() {
        return Object.keys(tags).map((id)=> {
            const tag = tags[id]
            if (tag.isSelected) {
                return (id)
            }
        })
    }

    async function submitReview() {
        console.log("STARS " + stars)

        await fetch('/api/submit-review', {
            method: 'POST',
            body: JSON.stringify({
                "name" : params.name, 
                "stars" : stars,
                "tags" : getTagData()
            }),
            next: {tags : ['review_' + params.name]}
        })
        closeWindow()
    }

    function reviewWindow(drinkName: string) {
        return (
            <Popup modal open={open}>
                <div className="h-screen w-screen bg-black bg-opacity-50 grid justify-center">
                    <div className="h-3/4 w-72 sm:w-128 md:w-160 bg-white self-center rounded-lg flex flex-col overflow-y-auto">
                        <div className="mt-1 ml-1">
                            <RxCross1 onClick={closeWindow} className="hover:text-red-500 hover:cursor-pointer" size="20" />
                        </div>
                        <p className="mt-2 font-bold self-center text-lg sm:text-xl md:text-2xl">{drinkName}</p>
                        <hr className="w-5/6 my-1 border-black border-1 self-center" />
                        <div className="ml-2">
                            {TagForm()}
                        </div>
                        <div className="flex-auto"></div>
                        <button onClick={submitReview} className={`${pixelify.className} w-32 mr-2 mb-2 place-self-end border-2 text-lg  border-black hover:border-red-500 hover:text-red-500 hover:font-bold`}>Submit</button>
                    </div>
                </div>
            </Popup>
        );
    }

    return (
        <>
            <button type="button" onClick={openWindow} className={`${pixelify.className} w-32 border-2 border-black hover:border-red-500 hover:text-red-500 hover:font-bold`}>Review</button>
            {reviewWindow(params.name)}
        </>
        
    );
}