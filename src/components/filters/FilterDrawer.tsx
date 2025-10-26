'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useFilterStore } from '@/lib/store/useFilterStore';
import SortBySection from './SortBySection';
import PriceFilterSection from './PriceFilterSection';
import SizeFilterSection from './SizeFilterSection';
import RatingFilterSection from './RatingFilterSection';

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FilterDrawer({ isOpen, onClose }: FilterDrawerProps) {
  const [localFilters, setLocalFilters] = useState({
    sortBy: 'rating',
    sortOrder: 'desc' as 'asc' | 'desc',
    selectedPriceRange: '',
    selectedSizes: [] as string[],
    selectedRating: null as number | null,
  });

  const { 
    sortBy, 
    sortOrder, 
    minPrice, 
    maxPrice, 
    sizes, 
    minRating,
    setSelectedSizes,
    setPriceRange,
    setRating,
    setSorting,
    clearFilters 
  } = useFilterStore();

  useEffect(() => {
    if (isOpen) {
      setLocalFilters({
        sortBy: sortBy || 'rating',
        sortOrder: sortOrder || 'desc',
        selectedPriceRange: getPriceRangeKey(minPrice, maxPrice),
        selectedSizes: sizes || [],
        selectedRating: minRating,
      });
    }
  }, [isOpen, sortBy, sortOrder, minPrice, maxPrice, sizes, minRating]);

  const getPriceRangeKey = (min: number | null, max: number | null): string => {
    if (min === null && max === 200) return 'less200';
    if (min === 200 && max === 500) return '200-500';
    if (min === 500 && max === 1000) return '500-1000';
    if (min === 1200 && max === 1500) return '1200-1500';
    if (min === 1500 && max === null) return 'more1500';
    return '';
  };

  const handleApply = () => {
    // Apply sorting
    setSorting(localFilters.sortBy as any, localFilters.sortOrder);

    // Apply sizes
    setSelectedSizes(localFilters.selectedSizes as any);

    // Apply price range
    const priceMap: Record<string, [number | null, number | null]> = {
      'less200': [null, 200],
      '200-500': [200, 500],
      '500-1000': [500, 1000],
      '1200-1500': [1200, 1500],
      'more1500': [1500, null],
    };
    const [min, max] = priceMap[localFilters.selectedPriceRange] || [null, null];
    setPriceRange(min, max);

    // Apply rating
    setRating(localFilters.selectedRating);

    onClose();
  };

  const handleClearAll = () => {
    clearFilters();
    setLocalFilters({
      sortBy: 'rating',
      sortOrder: 'desc',
      selectedPriceRange: '',
      selectedSizes: [],
      selectedRating: null,
    });
    onClose();
  };
  
  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/20 z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={`
        fixed top-0 right-0 h-full w-full md:w-[428px] bg-white z-50 
        transform transition-transform duration-300 ease-in-out
        flex flex-col
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        {/* Header - Fixed */}
        <div className="flex items-center justify-between p-5 border-b border-[#E2E2E2] flex-shrink-0">
          <h2 className="text-lg font-semibold text-[#8899A8]">Sort and Filter</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close filter"
          >
            <X className="w-5 h-5 text-[#8899A8]" />
          </button>
        </div>

        {/* Scrollable Filter Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-3 pb-32">
          <SortBySection 
            value={localFilters.sortBy}
            order={localFilters.sortOrder}
            onChange={(sortBy, order) => setLocalFilters(prev => ({ 
              ...prev, 
              sortBy, 
              sortOrder: order 
            }))}
          />

          <PriceFilterSection 
            selectedRange={localFilters.selectedPriceRange}
            onChange={(range) => setLocalFilters(prev => ({ 
              ...prev, 
              selectedPriceRange: range 
            }))}
          />

          <SizeFilterSection 
            selectedSizes={localFilters.selectedSizes}
            onChange={(sizes) => setLocalFilters(prev => ({ 
              ...prev, 
              selectedSizes: sizes 
            }))}
          />

          <RatingFilterSection 
            selectedRating={localFilters.selectedRating}
            onChange={(rating) => setLocalFilters(prev => ({ 
              ...prev, 
              selectedRating: rating 
            }))}
          />
        </div>

        {/* Footer Buttons - Fixed at Bottom */}
        <div className="border-t border-[#E2E2E2] p-5 bg-white flex gap-3 flex-shrink-0">
          <button
            onClick={handleClearAll}
            className="flex-1 h-12 border-2 border-[#E2E2E2] rounded-lg font-semibold text-sm text-black hover:bg-gray-50 transition-colors"
          >
            Clear All
          </button>
          <button
            onClick={handleApply}
            className="flex-[2] h-12 bg-[#0C4B54] text-white rounded-lg font-semibold text-sm hover:bg-[#0A3D44] transition-colors flex items-center justify-center gap-2"
          >
            Apply
            <span>→</span>
          </button>
        </div>
      </div>
    </>
  );
}
