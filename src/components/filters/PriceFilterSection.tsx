'use client';

interface PriceFilterSectionProps {
  selectedRange: string;
  onChange: (range: string) => void;
}

export default function PriceFilterSection({ selectedRange, onChange }: PriceFilterSectionProps) {
  const priceRanges = [
    { key: 'less200', label: 'Less than 200 EGP' },
    { key: '200-500', label: '200 EGP - 500 EGP' },
    { key: '500-1000', label: '500 EGP - 1000 EGP' },
    { key: '1200-1500', label: '1,200 EGP - 1,500 EGP' },
    { key: 'more1500', label: 'More than 1500 EGP' },
  ];

  return (
    <div className="w-full max-w-[388px] border border-[#E2E2E2] rounded-[10px] p-[20px_14px] gap-[18px]">
      <h3 className="text-base font-semibold text-black mb-4">Price</h3>
      <div className="flex flex-wrap gap-2">
        {priceRanges.map((range) => (
          <button
            key={range.key}
            onClick={() => onChange(selectedRange === range.key ? '' : range.key)}
            className={`
              px-3 py-1 rounded-md text-sm transition-colors border
              ${selectedRange === range.key
                ? 'bg-[#D1E7E7] text-[#0C4B54] border-[#0C4B54]'
                : 'bg-[#F3F4F6] text-[#8899A8] border-transparent hover:border-[#E2E2E2]'
              }
            `}
          >
            {range.label}
          </button>
        ))}
      </div>
    </div>
  );
}
