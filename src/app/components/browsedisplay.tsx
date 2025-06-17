import Image from "next/image";
import Link from "next/link";
import { getBrowseData } from "@/lib/db";

type Drink = {
  _id: string,
  name: string,
  brand: string
}

export default async function BrowseDisplay({
  search,
}: {
  search: string | undefined;
}) {
  const data = await getBrowseData(search);

  function cards() {
    if (data != undefined) {
      if (data.length > 0) {
        return (
          <div className="w-full grow gap-x-10 grid grid-cols-1 md:grid-cols-4 gap-y-4 md:gap-y-8 justify-items-center">
            {data.map((drink: Drink) => {
              return (
                <Card
                  key={`card_${drink._id}`}
                  brand={drink.brand}
                  name={drink.name}
                ></Card>
              );
            })}
          </div>
        );
      }
    }

    return <p className="italic">No drinks match search</p>;
  }

  return (
    <div className="flex flex-row *:mt-4 *:md:mt-10 pl-4 md:pl-10">
      <div className="w-16 md:w-48 border-r [&>h2]:font-semibold [&>h2]:text-md [&>h2]:md:text-xl ">
        <h1 className="font-bold w-16 md:w-48 text-xl md:text-5xl">
          Filter
        </h1>
        <h2>Brand</h2>
        <h2>Type</h2>
      </div>
      {cards()}
    </div>
  );
}

function Card({ brand, name }: { brand: string; name: string }) {
  return (
    <Link href={`/drink/${name}/${brand}/soda`}>
      <div className="min-h-max w-48 flex-col px-3 py-3 border-black border transition hover:-translate-y-3 hover:shadow-md shadow-black">
        <Image
          src="/drinkImages/Coca-Cola.jpg"
          alt="image of drink"
          width={200}
          height={400}
          className="border border-black mb-3 w-full"
        />
        <p className="text-sm">{brand}</p>
        <p className="w-full font-semibold text-ellipsis truncate text-sm">{name}</p>
      </div>
    </Link>
  );
}
