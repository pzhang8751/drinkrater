import React from "react";
import { useState } from "react";

// full screen review display

export default function ReviewDisplay() {
  const [isOpen, setOpen] = useState(false);

  return (
    <React.Fragment>
      <button onClick={() => setOpen(true)}>More Reviews</button>
      <ReviewWindow isOpen={isOpen}></ReviewWindow>
    </React.Fragment>
  );
}

function ReviewWindow({ isOpen }: { isOpen: boolean }) {
  if (isOpen) {
    function createReviews() {}
    return <div></div>;
  }
}
