// "use client"
import { useEffect } from "react";
import ReviewButton from "./reivewbutton";
import { RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri"
import { fetchStarData } from "@/lib/data";

export const dynamic = 'force-dynamic';

export default async function StarDisplay({ params }: {
    params: {
        name: string;
    }
}) {
    const size = "20";

    let starArray: any = [];

    let starData: any = await fetchStarData(params.name)
    /** Using a loop to determine how filled in the next star should be */
    for (let i = 5; i > 0; i--, starData--) {
        if (starData >= 1) {
            starArray.push(<RiStarFill key={"stars_" + starData} size={size} />)
        } else if (starData > 0) {
            starArray.push(<RiStarHalfFill key={"stars_" + starData} size={size} />)
        } else {
            starArray.push(<RiStarLine key={"stars_" + starData} size={size} />)
        }
    }
    // useEffect(() => {

    // }, []);

    return (
        <>
            <div className="flex flex-row">
                {starArray.map((star: any) => {
                    return star;
                })}
            </div>
        </>

    )
}