"use client";

import { IoIosSearch } from "react-icons/io";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [input, setInput] = useState("");
  const param = searchParams.get("search")
  let placeHolder: any = "Search drinks...";

  useEffect(() => {
  if (param !== null) {
    setInput(param);
  }
  }, [param])

  const search = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (input !== "") {
        router.replace(`/browse?search=${input}`);
      } else {
        router.replace('/browse')
      }
    }
  };

  return (
    <div className="h-min py-1 px-3 w-max md:w-48 border rounded-4xl flex flex-row gap-x-2">
      <IoIosSearch className="self-center size-6" />
      <input
        type="text"
        id="search"
        placeholder={placeHolder}
        value={input}
        onChange={(e) => {
          setInput(e.currentTarget.value);
        }}
        onKeyDown={search}
        className="w-full text-md md:text-lg outline-none"
      ></input>
    </div>
  );
}
