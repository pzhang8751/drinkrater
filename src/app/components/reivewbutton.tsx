"use client"

import React, { useState, useRef, useEffect } from "react";
import { pixelify } from "./fonts";
import { RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri"
import { useAppSelector } from "@/lib/store";
import { updateStars } from "@/lib/features/starSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store";
import { updateTag } from "@/lib/features/tagSlice";

interface Button {
    name : string
    action : () => void
}

interface PopUp {
    name: string
    action: () => void
    isOpen: boolean
    onSubmit: () => void
}

interface Rating {
    stars: number
    action: (value: number) => void
}

export default function ReviewButton({name, action} : Button) {
    // const dispatch = useDispatch<AppDispatch>()
    const [open, setOpen] = useState(false);

    const closeWindow = () => {
        setOpen(false)
        // drinkData.tags.forEach((tag) => {
        //     dispatch(updateTag({ id: tag, value: false }))
        // })
    };

    

    /** get tag states */
    // const tags = useAppSelector((state) => state.tagReducer.items)

    // function getTagData() {
    //     return Object.keys(tags).map((id) => {
    //         const tag = tags[id]
    //         if (tag.isSelected) {
    //             return (id)
    //         }
    //     })
    // }

    return (
        <>
            <button type="button" onClick={() => setOpen(true)} className={`${pixelify.className} mt-2 w-32 border-2 border-black hover:border-red-500 hover:text-red-500 hover:font-bold`}>Review</button>
            <ReviewForm name={name} action={closeWindow} isOpen={open} onSubmit={action}></ReviewForm>
        </>

    );
}

function ReviewForm({ name, action, isOpen ,onSubmit}: PopUp) {
    const commentRef = useRef("");
    const [commentValue, setComment] = useState("")
    const [stars, setStars] = useState(0)
    const [warningMessage, setWarningMessage] = useState("")

    function closeWindow() {
        setComment("")
        setStars(0)
        setWarningMessage("")
        action()
    }

    function onCommentChangeHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setComment(event.target.value)
        commentRef.current = event.target.value
    }

    async function submitReview() {
        if (stars>0) {
            await fetch('/api/submit-review', {
                method: 'POST',
                body: JSON.stringify({
                    "name": name,
                    "stars": stars,
                    "tags": [""],
                    "comment": commentRef.current
                }),
                // next: { tags: ['review_' + name] }
            }).then((responseJSON) => {
                if (responseJSON["ok"]) {
                    onSubmit()
                    closeWindow()
                } else {
                    setWarningMessage("Internal error")
                }
            })
            console.log("Review Submitted")
        } else {
            setWarningMessage("Select a star rating before submitting!")
        }
    }

    return (
        <div className={(isOpen ? "" : "hidden")}>
            <div className="h-screen w-screen bg-black opacity-50 fixed top-0 left-0 z-30" onClick={action}>
            </div>
            <section className="w-[74%] px-3 pt-2 pb-3 bg-white fixed top-[7%] left-[13%] z-40 space-y-2">
                <div className="flex">
                    <h2 className="flex-grow font-semibold text-lg">Review {name} Drink</h2>
                    <button className="font-semibold hover:text-red-500 justify-self-end" onClick={closeWindow}>X</button>
                </div>
                <hr className="border-black"></hr>
                <form id="reviewform" action={submitReview} className="px-5 space-y-2">
                    <label className="text-xl block">Rating</label>
                    <StarRating stars={stars} action={setStars}></StarRating>
                    <textarea rows={10} id="comment" className="px-1 w-full border-2 resize-none" placeholder="Add review..." value={commentValue} onChange={onCommentChangeHandler}></textarea>
                </form>
                <div className="px-5 flex">
                    <p className="place-self-center flex-grow text-red-500">{warningMessage}</p>
                    <button form="reviewform" className="px-5 py-2 rounded-full bg-orange-200 hover:bg-orange-400 hover:scale-90 transition-all duration-300 ease-in-out" type="submit">Submit</button>
                </div>

            </section>
        </div>
    )
}

function StarRating({ stars, action }: Rating) {
    let actualStars = 0;

    const [mousePosition, setMousePosition] = useState({ x: -1, y: -1 })
    const [isUp, setUp] = useState(true)

    const starArray: any = []
    const size = 40
    let starElements: any[];

    useEffect(() => {
        starElements = Array.from(document.getElementsByName("starReview"))
    })

    /** Using a loop to determine how filled in the next star should be */
    for (let i = 5, STARS = stars; i > 0; i--, STARS--) {
        if (STARS >= 1) {
            starArray.push(<RiStarFill size={size} name={"starReview"} key={"starReview_" + STARS} />)
        } else if (STARS > 0) {
            starArray.push(<RiStarHalfFill size={size} name={"starReview"} key={"starReview_" + STARS} />)
        } else {
            starArray.push(<RiStarLine size={size} name={"starReview"} key={"starReview_" + STARS} />)
        }
    }

    // the logic should get the starting x and y of the element and then check which half of the elemtn it is in
    // which would be x + half size and y + half size so 15 in this scenario 

    const onMouseDragHandler = (event: React.MouseEvent) => {
        const { clientX, clientY } = event
        setMousePosition({ x: clientX, y: clientY })

        if (!isUp) {
            starElements.forEach((element, i) => {
                const rectangle = element.getBoundingClientRect()
                if (mousePosition.x >= rectangle.x && mousePosition.x < rectangle.x + size / 2) {
                    actualStars = i + 0.5
                    action(actualStars)
                } else if (mousePosition.x >= rectangle.x + size / 2 && mousePosition.x < rectangle.x + size) {
                    actualStars = i + 1
                    action(actualStars)

                }
            })
        }
    }

    const onMouseUpHandler = () => {
        setUp(true)
    }

    const onMouseDownHandler = () => {
        setUp(false)
    }

    const onMouseClickHandler = (event: React.MouseEvent) => {
        starElements.forEach((element, i) => {
            const rectangle = element.getBoundingClientRect()
            if (mousePosition.x >= rectangle.x && mousePosition.x < rectangle.x + size / 2) {
                actualStars = i + 0.5
                action(actualStars)
            } else if (mousePosition.x >= rectangle.x + size / 2 && mousePosition.x < rectangle.x + size) {
                actualStars = i + 1
                action(actualStars)
            }
        })
    }

    const resetInfo = () => {
        setMousePosition({ x: -1, y: -1 })
        setUp(true)
    }

    return (
        <div onMouseMove={onMouseDragHandler} onMouseUp={onMouseUpHandler} onMouseDown={onMouseDownHandler} onClick={onMouseClickHandler} onMouseLeave={resetInfo} className="w-min flex hover:cursor-pointer">
            {starArray.map((star: any) => {
                return star;
            })}
        </div>
    )
}