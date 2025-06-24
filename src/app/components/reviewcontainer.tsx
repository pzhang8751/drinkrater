
import {StarDisplay, StarDisplayFallBack }from "./stardisplay";
import {ReviewPreview, ReviewPreviewFallBack} from "./reviewpreview";
import ReviewButton from "./reviewbutton";
import { Suspense } from "react";

export default function ReviewContainer({ name }: {name: string}) {

  return (
    <section className="mt-2 flex flex-col">
      <Suspense fallback={<StarDisplayFallBack></StarDisplayFallBack>}>
        <StarDisplay name={name}></StarDisplay>
      </Suspense>

      <h2 className="mt-2 font-semibold">Recent Reviews</h2>
      <Suspense fallback={<ReviewPreviewFallBack></ReviewPreviewFallBack>}>
        <ReviewPreview name={name}></ReviewPreview>
      </Suspense>
      <ReviewButton name={name}></ReviewButton>
    </section>
  );
}
