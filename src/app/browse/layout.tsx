"use client";

import BrowseButton from '@/app/components/browsebutton'
import { usePathname } from 'next/navigation';
import clsx from 'clsx'

export default function Layout({children}: {children:React.ReactNode}) {
    const pathName = usePathname();

    return (
        <main>
            <section className={clsx("p-16 flex flex-col items-center gap-y-5",{"hidden":!pathName.endsWith("/brand")&&!pathName.endsWith("/type")&&!pathName.endsWith("/all")})}>
                <h1 className="py-4 font-bold text-3xl sm:text-4xl md:text-5xl">
                    Browse Drinks By
                </h1>
                <div className="flex justify-center space-x-12 md:space-x-32">
                    <BrowseButton pathName="/browse/type" buttonName="Type"/>
                    <BrowseButton pathName="/browse/brand" buttonName="Brand"/>
                    <BrowseButton pathName="/browse/all" buttonName="All"/>
                </div>
                <hr className="w-[90%] border-black border"/>
            </section>
            {children}
        </main>
    );
}