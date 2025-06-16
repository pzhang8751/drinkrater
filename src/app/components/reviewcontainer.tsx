"use client";

import { useState, useEffect } from "react";
import StarDisplay from "./stardisplay";
import ReviewButton from "./reviewbutton";
import ReviewPreview from "./reviewpreview";

type Props = {
  name: string;
  // stars: number
};

type Review = {
  _id: string;
  stars: number;
  comment: string;
};

export default function ReviewContainer({ name }: Props) {
  const [update, setUpdate] = useState(false);
  const [averageStars, setStars] = useState(0);
  const [reviews, setReviews] = useState<Review[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/get-star-data?drink=${name}`);
      const stars = await res.json();

      setStars(stars);

      // checks if there are any reviews at all before fetching

      if (stars > 0) {
        fetch(`/api/get-comments?drink=${name}`)
          .then((res) => res.json())
          .then(setReviews);
      } else {
        setReviews([]);
      }
    };

    fetchData();
  }, [update]);

  return (
    <section className="flex flex-col">
      <StarDisplay stars={averageStars} size={40}></StarDisplay>

      {/* make a review component where the top layer of it is server but the bottom is fetch so two components */}
      {/* would have to depend on if there are multiple reviews or not so if there arent any reviews you would need 
                to have a message that says be the first to write a review in which case u would need to refresh and redisplay as
                a new review comes in. or if there are top reviews then it only needs to fetch once, enought to fill the space
                -- i think just make it client side for now and improve upon it later  
            */}
      <h2 className="font-semibold">Recent Reviews</h2>
      <ReviewPreview reviews={reviews}></ReviewPreview>
      <ReviewButton
        name={name}
        sendUpdate={() => setUpdate(!update)}
      ></ReviewButton>
    </section>
  );
}
