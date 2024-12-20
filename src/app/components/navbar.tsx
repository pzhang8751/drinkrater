"use client";

import Link from 'next/link'
import BrowseDropdown from './browsedropdown';
import { pixelify } from '@/app/components/fonts'
import { usePathname } from 'next/navigation';
import { useState } from 'react'
import clsx from 'clsx'

export default function NavBar() {
    const pathName = usePathname();

    const [dropdown, setDropdown] = useState(false);

    function openDropDown() {
        setDropdown(true);
    }

    function closeDropDown() {
        setDropdown(false);
    }

    return (
        <nav className="px-[2%] h-16 w-screen fixed flex items-center gap-x-4 bg-white border-black border-b-2 text-xl sm:text-2xl z-10">
            <Link href="/" className="h-min outline px-2 py-0.5 ml-4">Drink<span className="italic">rater</span></Link>
            <Link id="browse" href="/browse/type" className={clsx("hover:font-bold hover:text-red-500", { "text-red-500": pathName.includes("/browse") })}>BROWSE</Link>

            {/* <div id="dropdown" onMouseLeave={closeDropDown} onClick={closeDropDown} className={clsx({"invisible":dropdown===false},{"visible":dropdown===true})}>
                <BrowseDropdown />
            </div> */}
            {/* <div id="dropdown" onMouseLeave={closeDropDown} onClick={closeDropDown} className={(dropdown ? "visible" : "invisible")}>
                <BrowseDropdown />
            </div> */}
        </nav>

    );
}
