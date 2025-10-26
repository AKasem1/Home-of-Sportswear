export default function RatingStars({ value }: { value: number }) {
    return (
      <span className="flex items-center gap-0.5">
        {[1,2,3,4,5].map((v) =>
          <span
            key={v}
            className={`
              w-4 h-4 inline-block
              ${v <= Math.round(value) ? "text-yellow-400" : "text-[#E2E2E2]"}
            `}
          >★</span>
        )}
      </span>
    );
  }
  