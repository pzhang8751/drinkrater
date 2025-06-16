import ReviewDisplay from "./reviewdisplay"

type Review = {
    stars: number,
    comment: string, 
}

export default function ReviewPreview({reviews} : {reviews: Review[]}) {
    // review condition where returns if there are no reviews 
    if (reviews.length > 0) {
        return (
            <div>
                <ReviewDisplay></ReviewDisplay>
            </div>
        )
    }

    return (
    <p className="italic">
        Be the first to leave a review
    </p>
    )

}