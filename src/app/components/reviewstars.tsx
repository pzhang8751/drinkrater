"use client";

import { useState, useEffect, useRef } from "react";
import { RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri";

type Props = {
    stars: number,
    setStars: (value:number) => void
}

export default function ReviewStars({stars, setStars} : Props) {
  const size = 40;

  let [starArray, setStarArray] = useState<JSX.Element[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const starRef = useRef<HTMLDivElement>(null);

  function createStars() {
    let array: JSX.Element[] = [];

    for (let i = 5, STARS = stars; i > 0; i--, STARS--) {
      if (STARS >= 1) {
        array.push(<RiStarFill key={"stars_" + STARS} size={size} />);
      } else if (STARS > 0) {
        array.push(<RiStarHalfFill key={"stars_" + STARS} size={size} />);
      } else {
        array.push(<RiStarLine key={"stars_" + STARS} size={size} />);
      }
    }

    setStarArray(array);
  }

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    // removing effect after component leaves
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  useEffect(() => {
    createStars();
  }, [stars]);

  function onMouseClickHandler() {
    if (starRef.current != null) {
      const rectangle = starRef.current.getBoundingClientRect();

      let starIndex = (mousePosition.x - rectangle.x) / size; // Calculate star index
      starIndex = Math.ceil(starIndex * 2) / 2;

      setStars(starIndex);
    }
  }

  return (
    <div
      ref={starRef}
      onClick={onMouseClickHandler}
      className="flex flex-row w-min hover:cursor-pointer"
    >
      {starArray}
    </div>
  );
}
