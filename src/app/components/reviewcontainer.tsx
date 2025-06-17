// import { useState, useEffect } from "react";
import StarDisplay from "./stardisplay";
import ReviewButton from "./reviewbutton";
import ReviewPreview from "./reviewpreview";
import { getAverageStars, getTopComments } from "@/lib/db";

export default async function ReviewContainer({ name }: {name: string}) {

  const averageStars = await getAverageStars(name); 
  const reviews = await getTopComments(name); 

  return (
    <section className="flex flex-col">
      <StarDisplay stars={averageStars} size={40}></StarDisplay>
      <h2 className="font-semibold">Recent Reviews</h2>
      <ReviewPreview reviews={reviews}></ReviewPreview>
      <ReviewButton
        name={name}
      ></ReviewButton>
    </section>
  );
}
