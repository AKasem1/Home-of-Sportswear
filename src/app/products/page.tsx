'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import BrandFilter from '@/components/products/BrandFilter';
import ProductGrid from '@/components/layout/ProductGrid';
import FilterDrawer from '@/components/filters/FilterDrawer';
import FloatingFilterButton from '@/components/filters/FloatingFilterButton';

export default function ProductsPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white pb-20">
      <Header title="Men's Wear" />
      <BrandFilter />
      <ProductGrid />
      
      <FloatingFilterButton onClick={() => setIsFilterOpen(true)} />
      
      <FilterDrawer 
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />
    </div>
  );
}
