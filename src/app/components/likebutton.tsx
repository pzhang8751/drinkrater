"use client";

import React from "react";

import { useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

// need to test if this works by going into mongodb

export default function LikeButton({
  _id,
  likes,
}: {
  _id: string;
  likes: number;
}) {
  const [like, setLike] = useState(false);

  useEffect(() => {
    return () => {
      if (like) {
        fetch(`/api/update-comment-like?id=${_id}`, { method: "PUT" });
      }
    };
  }, []);

  if (like) {
    return (
      <React.Fragment>
        <FaHeart onClick={() => setLike(false)} className="ml-auto hover:cursor-pointer"></FaHeart>
        <p className="ml-1">{likes + 1}</p>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <FaRegHeart
        onClick={() => setLike(true)}
        className="ml-auto hover:cursor-pointer"
      ></FaRegHeart>
      <p className="ml-1">{likes}</p>
    </React.Fragment>
  );
}
