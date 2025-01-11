"use client"

import { useState } from "react"
import StarDisplay from "./stardisplay"
import ReviewButton from "./reivewbutton"

interface Container {
    name: string
}

export default function ReviewContainer({name} : Container) {
    const [update, setUpdate] = useState(true)

    return (
        <>
            <StarDisplay name={name} update={update}></StarDisplay>
            <ReviewButton name={name} action={() => setUpdate((prev) => !prev)}></ReviewButton>
        </>
    )
}