"use client"

import { useState, useEffect } from "react"
import StarDisplay from "./stardisplay"
import ReviewButton from "./reviewbutton"
import CommentDisplay from "./commentdisplay"

type Props = {
    name: string,
    // stars: number
}

export default function ReviewContainer({name} : Props) {
    const [update, setUpdate] = useState(false); 
    const [averageStars, setStars] = useState(0)

    useEffect(() => {
        fetch(`/api/get-star-data?drink=${name}`).then((res) => res.json()).then(setStars)

        console.log(averageStars)
    }, [update])

    return (
        <section>
            <StarDisplay stars={averageStars}></StarDisplay>
            <ReviewButton name={name}></ReviewButton>
        </section>
    )
}