"use client"

import { Result } from "postcss"
import { useState, useEffect } from "react"
import { RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri"

interface Display {
    name: string
    update: boolean
}

interface Review {
    stars: number
    comment: string
    id: string
}

interface Data {
    stars: number
    comment: string
}

export default function CommentDisplay({ name, update }: Display) {
    const [commentData, setCommentData] = useState<Data[]>()
    const [comments, setComments] = useState<JSX.Element[]>([])

    const fetchData = async () => {
        const data = await fetch(`/api/get-comments?name=${name}&amount=10`, {
            method: 'GET',
        }).then(Response => { return Response.json() }).then(json => {
            setCommentData(json["data"]["rows"])
        });
    }

    useEffect(() => {
        fetchData()
    }, [update])

    useEffect(() => {
        let tempComments: JSX.Element[] = []
        if (commentData != undefined) {
            Object.keys(commentData).forEach((i) => {
                const stars = commentData[parseInt(i)].stars
                const comment = commentData[parseInt(i)].comment
                tempComments.push(<Comment stars={stars} comment={comment} id={i}></Comment>)
            })

            if (tempComments.length === 0) {
                tempComments.push(<div>Be the first to leave a review!</div>)
            }
        }
        setComments(tempComments)
    }, [commentData])

    return (
        <section className="mt-6 sm:mt-0 sm:top-24 sm:right-[5%] sm:absolute sm:w-[45%]">
            <h2 className="font-semibold text-4xl">Reviews</h2>
            <div className="mt-2 max-h-128 overflow-auto border-[1px] border-black">
                {comments}
            </div>
        </section>

    )
}

function Comment({ stars, comment, id }: Review) {
    const size = 20
    const starArray: JSX.Element[] = []

    for (let i = 5; i > 0; i--, stars--) {
        if (stars >= 1) {
            starArray.push(<RiStarFill key={id + "stars_" + stars} size={size} />)
        } else if (stars > 0) {
            starArray.push(<RiStarHalfFill key={id + "stars_" + stars} size={size} />)
        } else {
            starArray.push(<RiStarLine key={id + "stars_" + stars} size={size} />)
        }
    }

    return (
        <div className="px-2 py-2 border-b-2">
            <div className="flex flex-row">{starArray}</div>
            <p className="mt-1">{comment}</p>
            <p dir="rtl" className="text-[11px] italic text-gray-400">Posted by Anonymous</p>
        </div>
    )
}