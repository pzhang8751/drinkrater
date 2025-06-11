"use client";

import { IoIosSearch } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBarHome() {
  const router = useRouter();
  const [input, setInput] = useState(""); 

  const search = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (input !== "") {
        router.push(`/browse?search=${input}`);
      }
    }
  };

  return (
    <div className="mt-8 py-2 px-4 w-[60%] border border-black rounded-4xl flex flex-row gap-x-2">
      <IoIosSearch className="self-center" size={28} />
      <input
        type="text"
        id="search"
        value={input}
        onChange={(e)=>{
          setInput(e.currentTarget.value)
        }}
        onKeyDown={search}
        placeholder="Begin your search now"
        className="w-full text-xl outline-none"
      ></input>
    </div>
  );
}
