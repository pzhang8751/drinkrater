import { useState } from "react";
import clsx from "clsx";
import { pixelify } from "./fonts";

export default function Tag(tag: string) {
    const [selected, setSelected] = useState(false);

    return (
        <input type="button" onClick={()=>{setSelected(!selected)}} data-value={"hello"} name={tag} value={tag} key={tag} id={tag} 
        className={clsx(`${pixelify.className} rounded-2xl border-black border-2 px-2 hover:cursor-pointer`, {"bg-pink-400":selected})}></input>
    );
}