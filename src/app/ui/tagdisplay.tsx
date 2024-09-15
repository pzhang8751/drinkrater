import { pixelify } from "./fonts"

export default function TagDisplay({params} : {
    params: {
        tags : string[]
    }
}) {
    return (
    <div className = "flex-row flex flex-wrap">
        {params.tags.map((tag) => {
            return <div key={tag} id={"display_" + tag} 
            className={`${pixelify.className} rounded-2xl mr-2 mb-2 border-black border-2 px-2`}>{tag}</div>
        })}
    </div>
    )
}   