"use client";

import Image from "next/image";
import Link from "next/link";

export default function DrinkCarousel() {
  // need 2x set of cards that appear on screen
  // need to calculate how many cards can appear on screen
  // may need to use useeffect and usestate
  let screenWidth: number = 0;
  let cardWidth: number = 200;

  if (typeof window !== "undefined") {
    screenWidth = window.screen.width;
    document.documentElement.style.setProperty(
      "--window-size",
      `${screenWidth}px`
    );
  }

  return (
    <div className="relative w-full overflow-x-hidden pt-6 pb-6">
      <div className="flex flex-row gap-x-10 animate-carousel">
        {/* hover:[animation-play-state:paused] */}
        <Card width={cardWidth}></Card>
        <Card width={cardWidth}></Card>
        <Card width={cardWidth}></Card>
        <Card width={cardWidth}></Card>
        <Card width={cardWidth}></Card>

        {/* <Card></Card> */}
        {/* 
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card> */}
      </div>
    </div>
  );
}

function Card({ width }: { width: number }) {
  return (
    // <Link href="/">
    <div className="min-h-max min-w-max flex-col px-3 py-3 border-black border transition hover:-translate-y-4 hover:shadow-lg shadow-black">
      <Image
        src="/drinkImages/Coca-Cola.jpg"
        alt="image of drink"
        width={width}
        height={400}
        className="border border-black mb-3"
      />
      <p>Brand</p>
      <p className="font-semibold">Drink Name</p>
    </div>
    // </Link>
  );
}
