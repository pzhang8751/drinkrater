import ReviewDisplay from "./reviewdisplay";
import React from "react";
import StarDisplay from "./stardisplay";

type Review = {
  _id: string;
  stars: number;
  comment: string;
};

export default function ReviewPreview({
  reviews,
}: {
  reviews: Review[] | null;
}) {
  function createReviews() {
    // use map to create reviews to pop up the space
    // fetches top three reviews

    if (reviews !== undefined && reviews != null && reviews.length > 0) {
      return (
        <div className="*:border-t border-x border-b">
          {reviews.map((review: Review) => {
            return (
              <ReviewCard
                key={"preview_" + review._id}
                review={review}
              ></ReviewCard>
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

export function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="p-2 ">
      <StarDisplay stars={review.stars} size={24}></StarDisplay>
      <p>{review.comment}</p>
    </div>
  );
}
