"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import Form from "next/form";
import ReviewStars from "./reviewstars";

type Button = {
  name: string;
}

type PopUp = {
  name: string;
  isOpen: boolean;
  closeWindow: () => void;
};

export default function ReviewButton({ name }: {name: string}) {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <button
        onClick={() => {
          setOpen(true);
        }}
        className="mt-4 w-min p-2 text-xl place-self-end hover:cursor-pointer text-white bg-black hover:scale-90 transition ease-in-out hover:bg-pink-400"
      >
        Review
      </button>
      <ReviewForm
        name={name}
        isOpen={open}
        closeWindow={() => {
          setOpen(false);
        }}
      ></ReviewForm>
    </React.Fragment>
  );
}

function ReviewForm({ name, isOpen, closeWindow }: PopUp) {
  const router = useRouter(); 
  const [stars, setStars] = useState(0);
  const [comment, setComment] = useState("");
  const [error, setError] = useState(""); 

  function resetWindow() {
    setStars(0);
    setComment("");
    setError(""); 
    closeWindow();
  }

  function onSubmit() {
    // maybe possible to convert part of this to server functions and keep the rest window as a client side function
    if (stars <= 0) {
      setError("Please give a star rating");
    } else {
      fetch("/api/post-review", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          stars: stars,
          comment: comment,
          likes: 0
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      fetch(`/api/update-stars-reviews?drink=${name}&stars=${stars}`, {method: "PUT"})
      resetWindow();
      router.refresh(); 
    }
  }

  if (isOpen) {
    return (
      <React.Fragment>
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-black opacity-25 z-10"
          onClick={resetWindow}
        ></div>
        <div className="fixed top-[15%] left-[10%] w-[80%] md:left-[15%] md:w-[70%] lg:left-[25%] lg:w-[50%] h-min bg-white z-20 p-2 flex flex-col">
          <div className="flex flex-row w-full">
            <p className="font-bold text-xl">{name} Review</p>
            <button
              onClick={resetWindow}
              className="ml-auto py-1 px-2 h-min bg-black text-white text-md font-bold hover:scale-90 hover:cursor-pointer hover:bg-pink-400 justify-self-end"
            >
              X
            </button>
          </div>

          <Form action={onSubmit} className="mt-2">
            <ReviewStars stars={stars} setStars={setStars}></ReviewStars>
            <div className="mt-2 p-2 border">
              <textarea
                maxLength={300}
                className="outline-none w-full h-32 resize-none"
                placeholder="Leave your thoughts here..."
                value={comment}
                onChange={(e) => {
                  setComment(e.currentTarget.value);
                }}
              ></textarea>
              <p className="text-end italic text-gray-500">
                {comment.length}/300
              </p>
            </div>
            <p className="italic text-red-500 font-light">{error}</p>
            <button
              type="submit"
              className="mt-2 py-2 px-3 text-white bg-black hover:cursor-pointer hover:scale-90 hover:bg-pink-400"
            >
              Submit
            </button>
          </Form>
        </div>
      </React.Fragment>
    );
  }
}
