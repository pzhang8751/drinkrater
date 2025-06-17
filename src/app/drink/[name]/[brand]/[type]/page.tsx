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
    <main className="py-16 px-10 min-h-screen flex flex-row *:pt-10 justify-center gap-x-5">
      <div className="w-lg h-xl relative">
        {/* Need to add sizes prop to image */}
        <Image
          src="/drinkImages/Coca-Cola.jpg"
          alt="Image of drink"
          fill={true}
          objectFit="contain"
          className="mt-10 border"
        ></Image>
      </div>
      <div>
        <section>
          <h1 className="font-semibold text-6xl pb-2">{name}</h1>
          <h2 className="font-light text-3xl">{brand}</h2>
        </section>
        <ReviewContainer name={name}></ReviewContainer>
      </div>
    </main>
  );
}
