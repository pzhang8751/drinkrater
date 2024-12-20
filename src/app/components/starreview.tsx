import { useState } from "react"
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa"

import { updateStars } from "@/lib/features/starSlice";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/lib/store";


export default function StarReview() {
    const dispatch = useDispatch<AppDispatch>()
    const starValue = useAppSelector((state) => state.starReducer).stars
    let actualStars = 0; 

    const [mousePosition, setMousePosition] = useState({ x: -1, y: -1 })
    const [stars, setStars] = useState(starValue)
    const [isUp, setUp] = useState(true)

    const starArray: any = []
    const size = 40
    const starElements = Array.from(document.getElementsByName("starReview"))

    /** Using a loop to determine how filled in the next star should be */
    for (let i = 5, STARS = stars; i > 0; i--, STARS--) {
        if (STARS >= 1) {
            starArray.push(<FaStar name={"starReview"} key={"starReview_" + STARS} size={size}></FaStar>)
        } else if (STARS > 0) {
            starArray.push(<FaStarHalfAlt name={"starReview"} key={"starReview_" + STARS} size={size}></FaStarHalfAlt>)
        } else {
            starArray.push(<FaRegStar name={"starReview"} key={"starReview_" + STARS} size={size}></FaRegStar>)
        }
    }

    // the logic should get the starting x and y of the element and then check which half of the elemtn it is in
    // which would be x + half size and y + half size so 15 in this scenario 

    const onMouseDragHandler = (event: React.MouseEvent) => {
        const { clientX, clientY } = event
        setMousePosition({ x: clientX, y: clientY })

        if (!isUp) {
            starElements.forEach((element, i) => {
                const rectangle = element.getBoundingClientRect()
                if (mousePosition.x >= rectangle.x && mousePosition.x < rectangle.x + size / 2) {
                    actualStars = i + 0.5
                    setStars(actualStars)
                } else if (mousePosition.x >= rectangle.x + size / 2 && mousePosition.x < rectangle.x + size) {
                    actualStars = i + 1
                    setStars(actualStars)
                    
                }
            })
            dispatch(updateStars(actualStars))
        }
    }

    const onMouseUpHandler = () => {
        setUp(true)
        // dispatch(updateStars(stars))
    }

    const onMouseDownHandler = () => {
        setUp(false)
        // dispatch(updateStars(stars))
    }

    const onMouseClickHandler = (event: React.MouseEvent) => {
        const { clientX, clientY } = event
        
        // setMousePosition({ x: clientX, y: clientY })
        
        starElements.forEach((element, i) => {
            const rectangle = element.getBoundingClientRect()
            if (mousePosition.x >= rectangle.x && mousePosition.x < rectangle.x + size / 2) {
                actualStars = i + 0.5
                setStars(actualStars)
            } else if (mousePosition.x >= rectangle.x + size / 2 && mousePosition.x < rectangle.x + size) {
                actualStars = i + 1
                setStars(actualStars)
            }
        })
        dispatch(updateStars(actualStars))
        // console.log("stars " + stars + " starValue " + starValue)
    }   
    
    const resetInfo = () => {
        setMousePosition({x:-1, y:-1})
        setUp(true)
    }

    return (
        <div onMouseMove={onMouseDragHandler} onMouseUp={onMouseUpHandler} onMouseDown={onMouseDownHandler} onClick={onMouseClickHandler} onMouseLeave = {resetInfo} className="w-min flex flex-row hover:cursor-pointer">
            {starArray.map((star: any) => {
                return star;
            })}
        </div>
    )
}