import SearchBar from "../components/searchbar"
import BrowseDisplay from "../components/browsedisplay"

export default function Browse() {
    return (
        <main className="min-h-screen py-16 px-10">
            {/* toy around with the top design being fixed */}
            {/* fixed bg-white w-full z-10 border-b pb-4 (for p)*/}
            {/* could also add a button that goes to the top when u the search bar goes past the visible area */}
            <div className="pt-10 flex flex-row gap-x-12 items-center">
                <p className="w-48 font-bold text-5xl border-r">Filter</p>
                <SearchBar></SearchBar>
            </div>
            <BrowseDisplay></BrowseDisplay>
        </main>
    )
}