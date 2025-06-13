
import DrinkImage from "@/app/components/drinkimage"
import DrinkInformation from "@/app/components/drinkinformation"

export default function DrinkPage() {
    return (
        <main className="py-16 px-10 min-h-screen flex flex-row *:pt-10 justify-center gap-x-5">
            <DrinkImage></DrinkImage>
            <DrinkInformation></DrinkInformation>
        </main>
    )
} 