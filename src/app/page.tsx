import type { Metadata } from "next";
import DrinkCarousel from "./components/drinkcarousel";
import SearchBarHome from "./components/searchbarhome";

export const metadata: Metadata = {
  title: "Drinkrater",
  description: "Find and rate your next favorite drink",
};

export default function Home() {
  return (
    <main className="*:justify-items-center text-center">
      <section className="h-screen pt-32 md:pt-44">
        <p className="text-xl md:text-3xl">Welcome to</p>
        <h1 className="text-6xl font-bold md:text-9xl">
          Drinkrater
        </h1>
        <p className="text-md md:text-2xl">
          Find your next favorite drink
        </p>
        <SearchBarHome></SearchBarHome>
      </section>

      <section className="mt-10">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          Review Popular Drinks
        </h2>
        <DrinkCarousel></DrinkCarousel>
      </section>

      <section className="mt-10">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold">
          Try Something New...<br></br>Every Day!
        </h2>
        <p> Coming soon ... </p>
      </section>
    </main>
  );
}
