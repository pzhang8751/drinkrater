"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import drinkData from "@/app/drinkdata.json";

interface Menu {
  open: () => void;
  close: () => void;
  isOpen: boolean;
}

interface SearchLinks {
  category: string;
  action: () => void;
}

export default function NavBar() {
  const pathName = usePathname();

  const [openDropdown, setDropdown] = useState(false);

  return (
    <>
      <nav className="px-[2%] h-16 w-screen fixed grid grid-cols-4 bg-white gap-x-4 text-sm sm:text-lg z-20">
        <Link href="/" className="self-center font-bold underline-offset-4 hover:underline">
          Drinkrater
        </Link>
        <div className="col-span-2 grid grid-cols-3 gap-x-4 place-items-center text-nowrap">
          <Link href="/" className="hover:text-red-500">
            Daily Drink
          </Link>
          <Link
            id="browse"
            href="/browse/type"
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
      {/* <DropDown
        open={() => setDropdown(true)}
        close={() => setDropdown(false)}
        isOpen={openDropdown}
      ></DropDown> */}
    </>
  );
}

function links({ category, action }: SearchLinks) {
  let array = drinkData.types;
  if (category === "brand") array = drinkData.brands;

  const linkArrayData = [];

  /** This is adding 5 random links to the types / brands section by removing a random type/ brand from the array */
  //THIS IS THE PROBLEM AREA HAHAHAHHAHAHHAHAHAH random things / editing the array mess with server
  for (let i = 0; i < 5 && array.length > 0; i++) {
    // linkArrayData[i] = array.splice(Math.floor(Math.random()*array.length),1)[0];
    //temp fix
    linkArrayData[i] = array[i];
  }

  return (
    <>
      {linkArrayData.map((data) => {
        // console.log(data);
        return (
          <Link
            key={"browse_link_" + data}
            href={"/browse/" + category + "/" + data}
            className="hover:underline"
            onClick={action}
          >
            {data[0].toUpperCase() + data.slice(1)}
          </Link>
        );
      })}
    </>
  );
}

function DropDown({ open, close, isOpen }: Menu) {
  return (
    <div
      className={
        "px-5 bg-blue-100 border-b-[1px] border-black z-10 fixed flex flex-row space-x-5 transition-all ease-in-out overflow-hidden " +
        (isOpen ? "translate-y-16" : "-translate-y-44")
      }
      onMouseOver={open}
      onMouseLeave={close}
    >
      <section className="flex flex-col gap-y-2">
        <h2 className="mt-1 font-bold">Types</h2>
        {links({ category: "type", action: close })}
        <Link
          href="/browse/type"
          className="mb-1 font-semibold hover:underline"
          onClick={close}
        >
          All types
        </Link>
      </section>
      <section className="flex flex-col gap-y-2">
        <h2 className="mt-1 font-bold">Brands</h2>
        {links({ category: "brand", action: close })}
        <Link
          href="/browse/brand"
          className="mb-1 font-semibold hover:underline"
          onClick={close}
        >
          All brands
        </Link>
      </section>
    </div>
  );
}
