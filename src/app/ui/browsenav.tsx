"use client";

import Link from 'next/link'
import BrowseDropdown from './browsedropdown';
import {pixelify} from '@/app/ui/fonts'
import { usePathname } from 'next/navigation';
import clsx from 'clsx'

/** Definitely need to find a better solution for this
 * Look more into Usestate?? 
 */

function openDropDown() {
    const dropDown = document.getElementById("dropdown"); 
    dropDown?.classList.remove("invisible");
    dropDown?.classList.add("visible");

    console.log();
}

function closeDropDown() {
    const dropDown = document.getElementById("dropdown");
    dropDown?.classList.add("invisible");
    dropDown?.classList.remove("visible");
}

export default function BrosweNav() {
    const pathName = usePathname(); 
    //const dropDown = document.getElementById("dropDown");

    return (
        <div>
            <div className={`${pixelify.className} h-16 w-full mb-16 flex text-center fixed z-10 bg-white border-black border-b-2 text-xl sm:text-2xl`}>
                <Link href="/" onMouseOver={closeDropDown} className="h-min outline px-2 py-0.5 ml-4 self-center">Drink<span className="italic">rater</span></Link>
                <div onMouseOver={closeDropDown} className="min-w-5 flex-auto"></div>
                <div className="self-center">
                    <Link id="browse" href="/browse/type" onMouseOver={openDropDown} onClick={closeDropDown} className={clsx("hover:font-bold hover:text-red-500",{"text-red-500":pathName.includes("/browse")})}>BROWSE</Link>
                </div>
                <div onMouseOver={closeDropDown} className="min-w-5 max-w-10 flex-auto"></div>
                {/* <div onMouseOver={closeDropDown} className="flex justify-center items-center space-x-5 text-nowrap mr-4">
                    <Link href="" className="h-min outline px-2 py-0.5 hover:bg-orange-300">Log In</Link>
                    <Link href="" className="h-min outline px-2 py-0.5 hover:bg-blue-300">Sign Up</Link>
                </div> */}
            </div>
            <div id="dropdown" onMouseLeave={closeDropDown} className="invisible">
                <BrowseDropdown />
            </div>

            <div className="h-16"></div>
        </div>

    );
}
