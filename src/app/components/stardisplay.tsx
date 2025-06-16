import { RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri";

export default function StarDisplay({ stars, size }: { stars: number, size:number }) {
  let starArray = [];

  for (let i = 5; i > 0; i--, stars--) {
    if (stars >= 1) {
      starArray.push(<RiStarFill key={"stars_" + stars} size={size} />);
    } else if (stars > 0) {
      starArray.push(<RiStarHalfFill key={"stars_" + stars} size={size} />);
    } else {
      starArray.push(<RiStarLine key={"stars_" + stars} size={size} />);
    }
  }

  return <div className="flex flex-row">{starArray}</div>;
}
