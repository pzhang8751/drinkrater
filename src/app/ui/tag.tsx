import { useState } from "react";
import clsx from "clsx";
import { pixelify } from "./fonts";

export default function Tag(tag: string) {
    const [selected, setSelected] = useState(false);

    return (
        <button onClick={()=>{setSelected(!selected)}} name={tag} data-value={selected} key={tag} id={tag} 
        className={clsx(`${pixelify.className} rounded-2xl mr-2 mb-2 border-black border-2 px-2 hover:cursor-pointer`, {"bg-pink-400":selected})}>{tag}</button>
    );
}