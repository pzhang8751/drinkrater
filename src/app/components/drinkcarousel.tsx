import Image from "next/image";

export default function DrinkCarousel() {

    // if i want to do animation where the entire thing cycles through i would need 2x images? that fit on screen = 12 for full screen because the slides would need to go through 1 set of images and then another set while displaying one set - both sets have to be the same images
  return (
    <div className="pt-6 flex flex-row w-full overflow-x-hidden gap-x-10">
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  );
}

function Card() {
  return (
    <div className="min-h-max min-w-max flex-col px-3 py-3 border-black border-[1px] transition hover:-translate-y-4 hover:shadow-xl shadow-black ease-in-out">
      <Image
        src="/drinkImages/Coca-Cola.jpg"
        alt="image of drink"
        width={200}
        height={400}
        className="border-[1px] border-black mb-3"
      />
      <p>Brand</p>
      <p className="font-semibold">Drink Name</p>
    </div>
  );
}
