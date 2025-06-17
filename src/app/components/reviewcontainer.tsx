
import {StarDisplay, StarDisplayFallBack }from "./stardisplay";
import {ReviewPreview, ReviewPreviewFallBack} from "./reviewpreview";
import ReviewButton from "./reviewbutton";
import { Suspense } from "react";

export default function ReviewContainer({ name }: {name: string}) {

  return (
    <section className="flex flex-col">
      <Suspense fallback={<StarDisplayFallBack size={40}></StarDisplayFallBack>}>
        <StarDisplay name={name} size={40}></StarDisplay>
      </Suspense>

      <h2 className="font-semibold">Recent Reviews</h2>
      <Suspense fallback={<ReviewPreviewFallBack></ReviewPreviewFallBack>}>
        <ReviewPreview name={name}></ReviewPreview>
      </Suspense>
      <ReviewButton name={name}></ReviewButton>
    </section>
  );
}
