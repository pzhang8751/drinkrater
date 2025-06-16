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

    return reviews?.map((review: Review) => {
      return <ReviewCard key={"preview_" + review._id} review={review}></ReviewCard>;
    });
  }

  if (reviews == null) {
    return <p className="italic border-t">Loading...</p>;
  } else {
    if (reviews.length > 0) {
      return (
        <React.Fragment>
          <div className="overflow-hidden *:border-t border-x border-b">{createReviews()}</div>
          <ReviewDisplay></ReviewDisplay>
        </React.Fragment>
      );
    }

    return <p className="italic border-t">Be the first to leave a review</p>;
  }
}

export function ReviewCard({ review }: { review: Review }) {
  return (
  <div className="p-2 ">
    <StarDisplay stars={review.stars} size={24}></StarDisplay>
    <p>{review.comment}</p>
  </div>
  );
}
