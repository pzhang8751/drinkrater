import Link from 'next/link'
import Image from 'next/image';

export default function DrinkDisplayCard({params}:{
    params:{
        drinkName:string,
        subText:string
    }
}) {
    return (
        <Link href={"/drink/" + params.drinkName}>
            <div className="h-80 w-64 py-2 px-1 flex flex-col border border-black">

                <div className="h-64 pb-1 relative">
                    <Image fill={true} style={{objectFit:'contain'}} src={'/drinkImages/' + params.drinkName + '.jpg'} alt={"Image of " + params.drinkName}/> 
                </div>
                
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