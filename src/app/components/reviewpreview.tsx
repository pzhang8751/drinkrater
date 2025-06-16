import ReviewDisplay from "./reviewdisplay";
import React from "react";

type Review = {
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
    return <></>;
  }
  if (reviews == null) {
    return <p className="italic">Loading...</p>;
  } else {
    if (reviews.length > 0) {
      return (
        <React.Fragment>
          <div className="overflow-hidden">{createReviews()}</div>
          <ReviewDisplay></ReviewDisplay>
        </React.Fragment>
      );
    }

    return <p className="italic">Be the first to leave a review</p>;
  }
}
