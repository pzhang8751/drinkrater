"use client"

import Image from "next/image"

export default function DrinkImage() {
    return (
        <div className="w-lg h-xl relative">
            <Image src="/drinkImages/Coca-Cola.jpg" alt="Image of drink" fill={true} objectFit="contain" className="mt-10 border"></Image>
        </div>
    )
}