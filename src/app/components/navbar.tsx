"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";

interface Menu {
  open: () => void;
  close: () => void;
  isOpen: boolean;
}

export default function NavBar() {
  const pathName = usePathname();

  const [openDropdown, setDropdown] = useState(false);

  return (
    <>
      <nav className="px-[2%] h-16 w-screen fixed grid grid-cols-4 bg-white gap-x-4 text-sm sm:text-lg z-20">
        <Link href="/" className="w-min self-center font-bold underline-offset-4 hover:underline">
          Drinkrater
        </Link>
        <div className="col-span-2 grid grid-cols-3 gap-x-4 place-items-center text-nowrap">
          <Link href="/" className="hover:text-red-500">
            Daily Drink
          </Link>
          <Link
            id="browse"
            href="/browse"
            className={clsx("hover:text-red-500", {
              "text-red-500": pathName.includes("/browse"),
            })}
            onMouseEnter={() => setDropdown(true)}
            onClick={() => setDropdown(false)}
          >
            Browse
          </Link>
          <Link href="/" className="hover:text-red-500">
            My Account
          </Link>
        </div>
      </nav>
    </>
  );
}

// function DropDown({ open, close, isOpen }: Menu) {
//   return (
//     <div
//       className={
//         "px-5 bg-blue-100 border-b border-black z-10 fixed flex flex-row space-x-5 transition-all ease-in-out overflow-hidden " +
//         (isOpen ? "translate-y-16" : "-translate-y-44")
//       }
//       onMouseOver={open}
//       onMouseLeave={close}
//     >
//       <section className="flex flex-col gap-y-2">
//         <h2 className="mt-1 font-bold">Types</h2>
//         {links({ category: "type", action: close })}
//         <Link
//           href="/browse/type"
//           className="mb-1 font-semibold hover:underline"
//           onClick={close}
//         >
//           All types
//         </Link>
//       </section>
//       <section className="flex flex-col gap-y-2">
//         <h2 className="mt-1 font-bold">Brands</h2>
//         {links({ category: "brand", action: close })}
//         <Link
//           href="/browse/brand"
//           className="mb-1 font-semibold hover:underline"
//           onClick={close}
//         >
//           All brands
//         </Link>
//       </section>
//     </div>
//   );
// }
