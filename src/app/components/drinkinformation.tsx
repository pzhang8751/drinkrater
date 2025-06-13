"use client"

import { useParams } from "next/navigation"

export default function DrinkInformation() {
    const params = useParams<{name:string, brand:string, type:string}>(); 

    return (
        <section>
            <h1 className="font-semibold text-6xl pb-2">{decodeURI(params.name)}</h1>
            <h2 className="font-light text-3xl">{decodeURI(params.brand)}</h2>
        </section>
    )
}