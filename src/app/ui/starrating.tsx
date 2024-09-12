
import { FaRegStar, FaStarHalfAlt, FaStar } from "react-icons/fa";

export default function StarRating({ params }: {
    params: {
        stars: number;
    }
}) {
    const starArray: any = [];
    
    /** Using a loop to determine how filled in the next star should be */
    for (let i = 5; i > 0; i--, params.stars--) {
        if (params.stars >= 1) {
            starArray.push(<FaStar key={"stars_" + params.stars}></FaStar>)
        } else if (params.stars > 0) {
            starArray.push(<FaStarHalfAlt key={"stars_" + params.stars}></FaStarHalfAlt>)
        } else {
            starArray.push(<FaRegStar key={"stars_" + params.stars}></FaRegStar>)
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