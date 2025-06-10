"use client"

import { useEffect, useState } from "react";
import { addTag, updateTag } from "@/lib/features/tagSlice";
import { useDispatch } from "react-redux";

import clsx from "clsx";
import { pixelify } from "../fonts";
import { AppDispatch, useAppSelector } from "@/lib/store";

export default function Tag(tag: string) {
    const dispatch = useDispatch<AppDispatch>()
    const tags = useAppSelector((state) => state.tagReducer.items[tag])
    const [selected, setSelected] = useState(false);

    /** logic to prevent depth error */
    useEffect(() => {
        if (tags === undefined) {
            dispatch(addTag({id: tag, item: {isSelected : false}}));
        } else {
            setSelected(tags.isSelected)
        }
    }, [dispatch, tag, tags])

    

    const onClickSelect = () => {
        if (selected === true) {
            dispatch(updateTag({id: tag, value:false}))
        } else {
            dispatch(updateTag({id: tag, value:true}))
        }
        setSelected(!selected)
    }

    return (
        <button onClick={onClickSelect} name={tag} data-value={selected} key={tag} id={tag} 
        className={clsx(`${pixelify.className} rounded-2xl mr-2 mb-2 border-black border-2 px-2 hover:cursor-pointer`, {"bg-pink-400":selected})}>{tag}</button>
    );
}