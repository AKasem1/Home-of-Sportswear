'use client';

import Image from 'next/image';
import { X } from 'lucide-react';
import { useFilterStore } from '@/lib/store/useFilterStore';

interface Brand {
  id: string;
  name: string;
  logo: string;
}

const BRANDS: Brand[] = [
  { id: 'Nike', name: 'Nike', logo: '/assets/nike.png' },
  { id: 'Adidas', name: 'Adidas', logo: '/assets/adidas.png' },
  { id: 'Puma', name: 'Puma', logo: '/assets/puma.png' },
  { id: 'Reebok', name: 'Reebok', logo: '/assets/reebok.png' },
  { id: 'Fila', name: 'Fila', logo: '/assets/fila.png' },
];

export default function BrandFilter() {
  const { brands: selectedBrands, toggleBrand } = useFilterStore();

  const isBrandSelected = (brandId: string) => selectedBrands.includes(brandId);

  return (
    <div className="w-full bg-white border-b border-[#E2E2E2]">
      <div className="overflow-x-auto scrollbar-hide px-5 py-4 md:px-8">
        <div className="flex gap-6 min-w-max">
          {BRANDS.map((brand) => {
            const isSelected = isBrandSelected(brand.id);
            
            return (
              <button
                key={brand.id}
                onClick={() => toggleBrand(brand.id)}
                className={`
                  flex items-center gap-2 h-12 px-2 py-1
                  rounded-[10px] border bg-[#F5F6FA]
                  transition-all duration-200
                  cursor-pointer
                  ${
                    isSelected
                      ? 'border-[#0C4B54]'
                      : 'border-[#ffffff] hover:border-[#D0D0D0]'
                  }
                `}
                aria-label={`Filter by ${brand.name}`}
                aria-pressed={isSelected}
              >
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 p-1.5">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    width={28}
                    height={28}
                    className="object-contain w-full h-full"
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                  />
                </div>

                <span className="text-[14px] font-medium text-black whitespace-nowrap pr-1">
                  {brand.name}
                </span>

                {isSelected && (
                  <X 
                    className="w-4 h-4 text-black flex-shrink-0" 
                    strokeWidth={2}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
