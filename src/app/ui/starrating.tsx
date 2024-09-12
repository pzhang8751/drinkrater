
import { FaRegStar, FaStarHalfAlt, FaStar } from "react-icons/fa";

export default function StarRating({ params }: {
    params: {
        stars: number;
    }
}) {
    const size = "20"; 
    const starArray: any = [];
    
    /** Using a loop to determine how filled in the next star should be */
    for (let i = 5; i > 0; i--, params.stars--) {
        if (params.stars >= 1) {
            starArray.push(<FaStar key={"stars_" + params.stars} size={size}></FaStar>)
        } else if (params.stars > 0) {
            starArray.push(<FaStarHalfAlt key={"stars_" + params.stars} size={size}></FaStarHalfAlt>)
        } else {
            starArray.push(<FaRegStar key={"stars_" + params.stars} size={size}></FaRegStar>)
        }
    }

    return (
        <div className="flex flex-row">
            {starArray.map((star: any) => {
                return star;
            })}
        </div>
    )
}