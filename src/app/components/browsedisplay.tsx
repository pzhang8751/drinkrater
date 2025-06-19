import Image from "next/image";
import Link from "next/link";

type Drink = {
  _id: string;
  name: string;
  brand: string;
};

export default async function BrowseDisplay({
  data,
}: {
  data: []
}) {

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
        <p className="w-full font-semibold text-ellipsis truncate text-sm">
          {name}
        </p>
      </div>
    </Link>
  );
}
