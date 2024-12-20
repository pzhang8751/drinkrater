import type { Metadata } from "next";
import { pixelify } from '@/app/components/fonts'
import DrinkCarousel from './components/drinkcarousel';

export const metadata: Metadata = {
  title: "Welcome to Drinkrater",
  description: "Find and rate your next favorite drink"
};

export default function Home() {
  return (
    <main>
      <section className="pt-44 h-screen flex-row justify-items-center">
        <p className="text-xl sm:text-2xl md:text-3xl">
          Welcome to
        </p>
        <h1 className={`${pixelify.className} text-7xl sm:text-8xl md:text-9xl`}>
          Drink<span className="italic">rater</span>
        </h1>
        <p className="text-md sm:text-xl md:text-2xl">
          Your one stop search for your next favorite drink.
        </p>
      </section>

      {/* <div className="h-screen mt-10 flex flex-col gap-12">
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl self-center">
          Browse Popular Drinks
        </h2>
        <DrinkCarousel />
      </div> */}
    </main>
  );
}
