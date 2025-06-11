import SearchBar from "../components/searchbar"

export default function Browse() {
    return (
        <main className="h-screen pt-16 px-10">
            <div className="pt-10 flex flex-row gap-x-12">
                <p className="w-48 font-bold text-5xl border-r">Filter</p>
                <SearchBar></SearchBar>
            </div>
            
        </main>
    )
}