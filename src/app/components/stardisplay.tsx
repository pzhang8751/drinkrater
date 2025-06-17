import { RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri";
import { getAverageStars } from "@/lib/db";

export async function StarDisplay({ name, size }: { name: string, size:number }) {

  let averageStars = await getAverageStars(name); 
  let starArray = [];

  for (let i = 5; i > 0; i--, averageStars--) {
    if (averageStars >= 1) {
      starArray.push(<RiStarFill key={"stars_" + averageStars} size={size} />);
    } else if (averageStars > 0) {
      starArray.push(<RiStarHalfFill key={"stars_" + averageStars} size={size} />);
    } else {
      starArray.push(<RiStarLine key={"stars_" + averageStars} size={size} />);
    }
  }

  return <div className="flex flex-row">{starArray}</div>;
}

export function StarDisplayFallBack({size} : {size:number}) {
  return (
    <div className="flex flex-row">
      <RiStarLine size={size} />
      <RiStarLine size={size} />
      <RiStarLine size={size} />
      <RiStarLine size={size} />
      <RiStarLine size={size} />
    </div>
  )
}
