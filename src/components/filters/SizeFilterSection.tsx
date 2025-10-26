'use client';

interface SizeFilterSectionProps {
  selectedSizes: string[];
  onChange: (sizes: string[]) => void;
}

export default function SizeFilterSection({ selectedSizes, onChange }: SizeFilterSectionProps) {
  const sizes = ['X Small', 'Small', 'Medium', 'Large', 'X Large'];

  const toggleSize = (size: string) => {
    if (selectedSizes.includes(size)) {
      onChange(selectedSizes.filter(s => s !== size));
    } else {
      onChange([...selectedSizes, size]);
    }
  };

  return (
    <div className="w-full max-w-[388px] border border-[#E2E2E2] rounded-[10px] p-[20px_14px]">
      <h3 className="text-base font-semibold text-black mb-4">Size</h3>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => toggleSize(size)}
            className={`
              px-4 py-2 rounded-md text-sm font-medium transition-colors border
              ${selectedSizes.includes(size)
                ? 'bg-[#D1E7E7] text-[#0C4B54] border-[#0C4B54]'
                : 'bg-[#F3F4F6] text-[#8899A8] border-transparent hover:border-[#E2E2E2]'
              }
            `}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
