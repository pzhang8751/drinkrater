"use client"

import { useState } from "react";
import { pixelify } from "./fonts";
import drinkData from "@/app/drinkdata.json"
import StarReview from "./starreview";
import { useAppSelector } from "@/lib/store";
import { updateStars } from "@/lib/features/starSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store";
import { updateTag } from "@/lib/features/tagSlice";

interface PopUp {
    name: string
    action: () => void
    isOpen: boolean
}

export default function ReviewButton({ params }: { params: { name: string } }) {
    const dispatch = useDispatch<AppDispatch>()
    /** window open / close */
    const [open, setOpen] = useState(false);

    const closeWindow = () => {
        setOpen(false)
        setWarningMessage("")
        dispatch(updateStars(0))
        drinkData.tags.forEach((tag) => {
            dispatch(updateTag({ id: tag, value: false }))
        })
    };

    const [warningMessage, setWarningMessage] = useState("")

    /** get tag states */
    const tags = useAppSelector((state) => state.tagReducer.items)
    const stars = useAppSelector((state) => state.starReducer).stars

    function getTagData() {
        return Object.keys(tags).map((id) => {
            const tag = tags[id]
            if (tag.isSelected) {
                return (id)
            }
        })
    }

    async function submitReview() {
        await fetch('/api/submit-review', {
            method: 'POST',
            body: JSON.stringify({
                "name": params.name,
                "stars": stars,
                "tags": getTagData()
            }),
            next: { tags: ['review_' + params.name] }
        }).then((responseJSON) => {
            if (responseJSON["ok"]) {
                closeWindow()
            } else {
                setWarningMessage("Select a star rating before submitting!")
            }
        })
    }

    return (
        <>
            <button type="button" onClick={()=>setOpen(true)} className={`${pixelify.className} w-32 border-2 border-black hover:border-red-500 hover:text-red-500 hover:font-bold`}>Review</button>
            <ReviewForm name={params.name} action={closeWindow} isOpen={open}></ReviewForm>
        </>

    );
}

function ReviewForm({name, action, isOpen} : PopUp) {
    return (
        <div className={(isOpen ? "" : "hidden")}>
            <div className="h-screen w-screen bg-black opacity-50 fixed top-0 left-0 z-30" onClick={action}>
            </div>
            <section className="w-[80%] px-3 py-2 bg-white fixed top-[7%] left-[10%] z-40 space-y-2">
                <div className="flex">
                    <h2 className="flex-grow font-semibold text-lg">Review {name} Drink</h2>
                    <button className="font-semibold hover:text-red-500 justify-self-end" onClick={action}>X</button>
                </div>
                <hr className="border-black"></hr>
                <form className="px-5 space-y-2 *:block">
                    <label className="">Rating</label>
                    {/* <StarReview></StarReview> */}
                    <textarea rows={10} className="px-1 w-full border-2 resize-none" placeholder="Add review..."></textarea>
                    <button className="px-5 py-2 rounded-full bg-orange-200 hover:bg-orange-400 hover:scale-90 transition-all duration-300 ease-in-out place-self-end" type="submit">Submit</button>
                </form>
            </section>
        </div>
    )
}

function StarRating() {
    return (
        <>
        </>
    )
}