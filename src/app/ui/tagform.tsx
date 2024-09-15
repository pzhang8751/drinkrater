
import drinkData from '@/app/drinkdata.json';
import Tag from './tag';
import StarReview from './starreview';

export default function TagForm() {

    return (
        <div className="flex flex-col space-y-2">
            <label htmlFor="stars" className="font-bold">Rating</label>
            <div id="stars">
                <StarReview />
            </div>

            <label htmlFor="tags" className="font-bold">Tags</label>
            <div id="tags" className="place-items-start flex flex-wrap">
                {
                    drinkData.tags.map((tag) => {
                        return Tag(tag)
                    })
                }
            </div>
        </div>
    );
}