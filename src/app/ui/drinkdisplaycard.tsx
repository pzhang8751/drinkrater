import Link from 'next/link'

export default function DrinkDisplayCard({params}:{
    params:{
        drinkName:string,
        subText:string
    }
}) {
    return (
        <Link href={"/drink/" + params.drinkName}>
            <div className="h-80 w-64 flex flex-col border border-black">
                {/**Decide whether to use Next Js Image or regular img */}
                <p className="font-bold text-lg pl-2">
                    {params.drinkName}
                </p>
                <p className="text-sm pl-2">
                    {params.subText}
                </p>
            </div>
        </Link>

    );
}