"use client"

import { useState, useEffect } from "react";
import { RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri"
import { fetchStarData } from "@/lib/data";

interface Params {
    name: string
    update: boolean
}

export default function StarDisplay({ name, update }: Params) {
    const size = "40";

    const [averageStars, setAverageStars] = useState(0)
    const [starArray, setStarArray] = useState<JSX.Element[]>([]);

    const fetchData = async () => {
        const data = await fetchStarData(name)
        console.log(data + " DATA")
        if (data===undefined) {
            setAverageStars(0)
        } else {
            setAverageStars(data)
        }
    }

    useEffect(() => {
        fetchData()
    }, [update])

    useEffect(() => {
        const newStarArray: JSX.Element[] = [];

        let starData = averageStars
        /** Using a loop to determine how filled in the next star should be */
        for (let i = 5; i > 0; i--, starData--) {
            if (starData >= 1) {
                newStarArray.push(<RiStarFill key={"stars_" + starData} size={size} />)
            } else if (starData > 0) {
                newStarArray.push(<RiStarHalfFill key={"stars_" + starData} size={size} />)
            } else {
                newStarArray.push(<RiStarLine key={"stars_" + starData} size={size} />)
            }
        }

        setStarArray(newStarArray)
    }, [averageStars])

    return (
        <>
            <div className="mt-2 flex flex-row">
                {starArray}
            </div>
        </>
    )
}