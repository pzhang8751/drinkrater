"use client"

import Link from 'next/link'
import {pixelify} from '@/app/ui/fonts'
import { usePathname } from 'next/navigation';
import clsx from 'clsx'

interface BrowseButtonType {
    pathName: string;
    buttonName: string; 
}

export default function BrowseButton(props : BrowseButtonType){
    const pathName = usePathname();

    return (
        <Link href={props.pathName}>
            <div className={clsx(`${pixelify.className} w-24 sm:w-28 md:w-32 border-2 border-black py-2 rounded-2xl text-center text-md sm:text-xl md:text-2xl hover:font-bold hover:text-red-500 hover:border-red-500`, {"border-red-500 text-red-500": pathName === props.pathName})}>
                {props.buttonName}
            </div>
        </Link>

    );
}