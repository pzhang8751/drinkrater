import {pixelify} from '@/app/ui/fonts'

import DrinkCarousel from './ui/drinkcarousel';

export default function Home() {
  return (
    <main>
      <div className="h-[calc(100vh-4rem)] flex justify-center">
        <div className="w-screen flex flex-col pt-32">
          {/** need to figure out the correct pl for each size */}
          <p className="text-xl sm:text-2xl md:text-3xl pl-10 sm:pl-32 md:pl-64 xl:pl-72">
            Welcome to
          </p>
          <h1 className={`${pixelify.className} mt-3 text-7xl sm:text-8xl md:text-9xl self-center`}>
            Drink<span className="italic">rater</span>
          </h1>
          <p className="mt-8 text-md sm:text-xl md:text-2xl self-center">
            Your one stop search for your next favorite drink. 
          </p>
        </div>
      </div>

      <div className="h-screen mt-10 flex flex-col gap-12">
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl self-center">
          Browse Popular Drinks
        </h2>
        <DrinkCarousel />
      </div>
      

    </main>
  );
}
