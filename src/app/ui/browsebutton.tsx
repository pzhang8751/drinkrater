import Link from 'next/link'

interface BrowseButtonType {
    pathName: string;
    buttonName: string; 
}

export default function BrowseButton(props : BrowseButtonType){
    return (
        <Link href={props.pathName}>
            <div className="h-min w-32 border-2 border-black py-2 rounded-2xl hover:bg-purple-300 text-center text-2xl">
                {props.buttonName}
            </div>
        </Link>

    );
}