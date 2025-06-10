import type { Metadata } from "next";
import DrinkCarousel from "./components/drinkcarousel";

export const metadata: Metadata = {
  title: "Drinkrater",
  description: "Find and rate your next favorite drink",
};

export default function Home() {
  return (
    <main className="*:flex-row *:justify-items-center">
      <section className="h-screen pt-44">
        <p className="text-xl sm:text-2xl md:text-3xl">Welcome to</p>
        <h1 className="text-7xl font-bold sm:text-8xl md:text-9xl">
          Drinkrater
        </h1>
        <p className="text-md sm:text-xl md:text-2xl">
          Find your next favorite drink
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-7xl font-bold mb-6">
          Review Popular Drinks
        </h2>
        <DrinkCarousel></DrinkCarousel>
      </section>

      <section className="mt-10">
        <h2 className="text-7xl font-bold text-center">
          Try Something New...<br></br>Every Day!
        </h2>
        <p> Coming soon ... </p>
      </section>
    </main>
  );
}
