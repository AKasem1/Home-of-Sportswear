'use client';

import { ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface SortBySectionProps {
  value: string;
  order: 'asc' | 'desc';
  onChange: (sortBy: string, order: 'asc' | 'desc') => void;
}

export default function SortBySection({ value, order, onChange }: SortBySectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const sortOptions = [
    { value: 'rating', label: 'Most Recommended', order: 'desc' },
    { value: 'price', label: 'Price: Low to High', order: 'asc' },
    { value: 'price', label: 'Price: High to Low', order: 'desc' },
    { value: 'created_at', label: 'Newest First', order: 'desc' },
    { value: 'name', label: 'Name: A to Z', order: 'asc' },
  ];

  const getSelectedLabel = () => {
    const option = sortOptions.find(opt => opt.value === value && opt.order === order);
    return option?.label || 'Most Recommended';
  };

  return (
    <div className="w-full max-w-[388px] border border-[#E2E2E2] rounded-[10px] p-[14px]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between"
      >
        <span className="text-base font-semibold text-black">Sort By</span>
        <div className="flex items-center gap-2 text-[#0C4B54]">
          <span className="text-sm font-medium">{getSelectedLabel()}</span>
          <ChevronRight className="w-4 h-4" />
        </div>
      </button>

      {isOpen && (
        <div className="mt-4 space-y-2">
          {sortOptions.map((option, idx) => (
            <button
              key={idx}
              onClick={() => {
                onChange(option.value, option.order as 'asc' | 'desc');
                setIsOpen(false);
              }}
              className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                value === option.value && order === option.order
                  ? 'bg-[#0C4B54] text-white'
                  : 'hover:bg-gray-100 text-black'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
