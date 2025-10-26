'use client';

import Image from 'next/image';

export default function BrandsSlider() {
  const brands = [
    { name: 'Nike', logo: '/assets/nike.png' },
    { name: 'Adidas', logo: '/assets/adidas.png' },
    { name: 'Puma', logo: '/assets/puma.png' },
    { name: 'Reebok', logo: '/assets/reebok.png' },
    { name: 'Nike', logo: '/assets/nike.png' },
    { name: 'Adidas', logo: '/assets/adidas.png' },
    { name: 'Puma', logo: '/assets/puma.png' },
    { name: 'Reebok', logo: '/assets/reebok.png' },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Featured Brands
          </h2>
          <p className="text-[#8899A8] text-base md:text-lg max-w-2xl mx-auto">
            We partner with the world's leading sportswear brands to bring you 
            the best quality products
          </p>
        </div>

        {/* Brands Slider */}
        <div className="relative overflow-hidden">
          <div className="flex gap-12 md:gap-20 animate-scroll">
            {brands.map((brand, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-40 md:w-48 h-24 md:h-32 flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer opacity-60 hover:opacity-100"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 160px, 192px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
