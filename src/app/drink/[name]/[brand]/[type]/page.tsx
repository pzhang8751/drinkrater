import Image from "next/image";
import ReviewContainer from "@/app/components/reviewcontainer";

type Prop = {
  name: string;
  brand: string;
  type: string;
};

export default async function DrinkPage({ params }: { params: Promise<Prop> }) {
  let { name, brand, type } = await params;
  name = decodeURI(name);
  brand = decodeURI(brand);
  type = decodeURI(type);

  return (
    // <main className="pt-16 pb-10 md:py-16 px-10 min-h-screen flex flex-col md:flex-row justify-center gap-x-5 *:mt-2">
    <main className="min-h-screen md:h-screen w-full pt-16 pb-4 px-10 md:pb-8 flex flex-col md:flex-row ">
      <div className="md:mr-6 place-items-center border relative h-[40vh] md:w-[50vw] md:h-full">
        {/* Need to add sizes prop to image */}
        <Image
          src="/drinkImages/Coca-Cola.jpg"
          alt="Image of drink"
          fill={true}
          objectFit="contain"
        ></Image>
      </div>
      <div className="md:w-[50vw]">
        <section>
          <h1 className="mt-2 font-semibold text-2xl md:text-6xl md:pb-2">{name}</h1>
          <h2 className="font-light text-xl md:text-3xl">{brand}</h2>
        </section>
        <ReviewContainer name={name}></ReviewContainer>
      </div>
    </main>
  );
}
