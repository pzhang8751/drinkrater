import { RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri";
import { getAverageStars } from "@/lib/db";

export async function StarDisplay({
  name,
}: {
  name: string;
}) {
  let averageStars = await getAverageStars(name);
  let starArray = [];

  for (let i = 5; i > 0; i--, averageStars--) {
    if (averageStars >= 1) {
      starArray.push(<RiStarFill key={"stars_" + averageStars} />);
    } else if (averageStars > 0) {
      starArray.push(<RiStarHalfFill key={"stars_" + averageStars} />);
    } else {
      starArray.push(<RiStarLine key={"stars_" + averageStars} />);
    }
  }

  return <div className="flex flex-row *:w-8 *:h-8">{starArray}</div>;
}

export function StarDisplayFallBack() {
  return (
    <div className="flex flex-row *:w-8 *:h-8">
      <RiStarLine />
      <RiStarLine />
      <RiStarLine />
      <RiStarLine />
      <RiStarLine />
    </div>
  );
}
