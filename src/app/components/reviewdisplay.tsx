"use client"

import React from "react";
import { useState } from "react";

// playing around with cool design feature - may need to add animation css 
import { FaPlus } from "react-icons/fa6"; 

// full screen review display

export default function ReviewDisplay() {
  const [isOpen, setOpen] = useState(false);

  return (
    <React.Fragment>
      <button
        onClick={() => setOpen(true)}
        className="mt-2 w-min text-nowrap hover:cursor-pointer hover:text-teal-800"
      >
        More Reviews
        {/* <FaPlus className="ml-2 self-center hover:rotate-210"/> */}
      </button>
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
