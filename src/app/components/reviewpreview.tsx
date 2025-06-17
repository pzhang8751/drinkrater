import ReviewDisplay from "./reviewdisplay";
import React from "react";
import { ImSpinner6 as Spinner } from "react-icons/im";
import { getTopComments } from "@/lib/db";

import { StaticReviewCard } from "./review";

type Review = {
  _id: string;
  stars: number;
  comment: string;
};

export async function ReviewPreview({name} : {name:string}) {

  const reviews = await getTopComments(name); 

  function createReviews() {
    // use map to create reviews to pop up the space
    // fetches top three reviews

    if (reviews !== undefined && reviews != null && reviews.length > 0) {
      return (
        <div className="*:border-t border-x border-b">
          {reviews.map((review: Review) => {
            return (
              <StaticReviewCard
                key={"preview_" + review._id}
                review={review}
                size={24}
              ></StaticReviewCard>
            );
          })}
        </div>
      );
    }

    return <p className="italic border-t">Be the first to leave a review</p>;
  }

  return (
    <React.Fragment>
      {createReviews()}
      <ReviewDisplay></ReviewDisplay>
    </React.Fragment>
  );
}

export function ReviewPreviewFallBack() {
  return (
  <div className="h-[50vh] w-full flex flex-row justify-center items-center">
    <Spinner className="animate-spin mr-10" size={75}></Spinner>
    <p className="font-bold text-3xl">Loading ...</p>
  </div>
  )
}
