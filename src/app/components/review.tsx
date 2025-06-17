import { RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri";
import LikeButton from "./likebutton";

export async function ReveiwCard() {}
// this one fetches its own data

type Review = {
  _id: string;
  stars: number;
  comment: string;
  likes: number;
};

export function StaticReviewCard({
  review,
  size,
}: {
  review: Review;
  size: number;
}) {
  function createStars() {
    let starArray = [];

    for (let i = 5, stars = review.stars; i > 0; i--, stars--) {
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

  return (
    <div className="p-2">
        <div className="flex flex-row items-center">
                  {createStars()}
      <LikeButton _id={review._id} likes={review.likes}></LikeButton>
        </div>


      <p>{review.comment}</p>
    </div>
  );
}
