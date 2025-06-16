"use client";

import { useState } from "react";
import React from "react";
import Form from "next/form";

type Button = {
  name: string;
  sendUpdate: () => void; 
}

type PopUp = {
  name: string;
  isOpen: boolean;
  sendUpdate: () => void; 
  closeWindow: () => void;
};

export default function ReviewButton({ name, sendUpdate }: Button) {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <button
        onClick={() => {
          setOpen(true);
        }}
        className="p-2 text-xl hover:cursor-pointer text-white bg-black hover:scale-90 transition ease-in-out hover:bg-pink-400"
      >
        Review
      </button>
      <ReviewForm
        name={name}
        isOpen={open}
        closeWindow={() => {
          setOpen(false);
        }}
        sendUpdate={sendUpdate}
      ></ReviewForm>
    </React.Fragment>
  );
}

function ReviewForm({ name, isOpen, sendUpdate, closeWindow }: PopUp) {
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
    if (stars <= -1) {
      setError("Please give a star rating");
    } else {
      fetch("/api/post-review", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          stars: stars,
          comment: comment,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      sendUpdate();
      resetWindow();
    }
  }

  if (isOpen) {
    return (
      <React.Fragment>
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-black opacity-25 z-10"
          onClick={resetWindow}
        ></div>
        <div className="fixed top-[20%] left-[20%] bg-white w-[60%] h-[60%] z-20 p-2">
          <div className="flex flex-row w-full">
            <p className="font-bold text-xl">{name} Review</p>
            <button
              onClick={resetWindow}
              className="py-1 px-2 bg-black text-white text-xl font-bold hover:scale-90 hover:cursor-pointer hover:bg-pink-400 justify-self-end"
            >
              X
            </button>
          </div>

          <Form action={onSubmit}>
            <div className="p-2 border">
              <textarea
                maxLength={300}
                className="outline-none w-full resize-none"
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
              className="py-2 px-3 text-white bg-black hover:cursor-pointer hover:scale-90 hover:bg-pink-400"
            >
              Submit
            </button>
          </Form>
        </div>
      </React.Fragment>
    );
  }
}
