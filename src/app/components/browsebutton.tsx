"use client"

import React, { useState } from "react"
import Link from "next/link"

// best logic is to probably fetch the brand and type and then pass it into the component 

export default function BrowseButton() {
    const [isOpen, setOpen] = useState(false); 

    return (
        <React.Fragment>
            <Link href="/browse">
                Browse
            </Link>
            <DropDown isOpen={isOpen}></DropDown>
        </React.Fragment>
    )
}

function DropDown({isOpen} : {isOpen: boolean}) {
    if (isOpen) {
        return (
            <div>

            </div>
        )
    }
}