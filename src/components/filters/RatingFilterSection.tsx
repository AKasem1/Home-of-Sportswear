'use client';

interface RatingFilterSectionProps {
  selectedRating: number | null;
  onChange: (rating: number | null) => void;
}

export default function RatingFilterSection({ selectedRating, onChange }: RatingFilterSectionProps) {
  const ratings = [4.5, 4, 3.5];
  const specialOption = { value: 3, label: 'less than 3.5+' };

  return (
    <div className="w-full max-w-[388px] border border-[#E2E2E2] rounded-[10px] p-[20px_14px]">
      <h3 className="text-base font-semibold text-black mb-4">Rating</h3>
      <div className="flex flex-wrap gap-2">
        {ratings.map((rating) => (
          <button
            key={rating}
            onClick={() => onChange(selectedRating === rating ? null : rating)}
            className={`
              px-4 py-2 rounded-md text-sm font-medium transition-colors border
              ${selectedRating === rating
                ? 'bg-[#D1E7E7] text-[#0C4B54] border-[#0C4B54]'
                : 'bg-[#F3F4F6] text-[#8899A8] border-transparent hover:border-[#E2E2E2]'
              }
            `}
          >
            {rating}
          </button>
        ))}
        <button
          onClick={() => onChange(selectedRating === specialOption.value ? null : specialOption.value)}
          className={`
            px-4 py-2 rounded-md text-sm font-medium transition-colors border
            ${selectedRating === specialOption.value
              ? 'bg-[#D1E7E7] text-[#0C4B54] border-[#0C4B54]'
              : 'bg-[#F3F4F6] text-[#8899A8] border-transparent hover:border-[#E2E2E2]'
            }
          `}
        >
          {specialOption.label}
        </button>
      </div>
    </div>
  );
}
