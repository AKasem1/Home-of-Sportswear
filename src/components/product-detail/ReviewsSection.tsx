import RatingStars from "./RatingStars";

export function ReviewCard({ review }: { review: any }) {
  return (
    <div className="flex gap-4 items-start mb-6 pb-6 border-b border-[#E2E2E2] last:border-0">
      <div className="bg-[#E9E9E9] rounded-full w-11 h-11 flex-shrink-0" />
      <div className="flex-1">
        <div className="font-medium text-black">{review.reviewer}</div>
        <div className="flex items-center gap-2 text-xs text-[#8899A8] mb-2">
          <span>{new Date(review.created_at).toLocaleDateString()}</span>
          <RatingStars value={review.rating} />
        </div>
        <div className="text-[#8899A8] text-base leading-relaxed">{review.comment}</div>
      </div>
    </div>
  );
}

export default function ReviewsSection({
  reviews,
  average,
  count,
}: {
  reviews: any[];
  average: number;
  count: number;
}) {
  return (
    <div className="w-full max-w-[394px] md:max-w-none mx-auto md:mx-0 px-4 md:px-0">
      <div className="flex justify-between items-center mb-4">
        <span className="text-xl font-semibold">Reviews</span>
        <span className="text-[#8899A8] font-medium text-sm">Total: {count}</span>
      </div>
      <div className="flex items-center gap-2 mb-6">
        <RatingStars value={average} />
        <span className="font-semibold text-black">{average.toFixed(1)} rating</span>
      </div>
      <div className="space-y-0">
        {reviews.map((r, idx) => <ReviewCard key={`${r.reviewer}-${idx}`} review={r} />)}
      </div>
    </div>
  );
}
