'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Heart } from 'lucide-react';
import { Product } from '@/lib/types/product';
import { useWishlistStore } from '@/lib/store/useWishlistStore';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();
  const { isInWishlist, toggleWishlist } = useWishlistStore();
  const isWishlisted = isInWishlist(product.id);

  const handleCardClick = () => {
    router.push(`/products/${product.id}`);
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group cursor-pointer bg-white rounded-[15px] overflow-hidden transition-all duration-200 hover:shadow-lg"
    >
      <div className="relative w-full h-[232px] bg-[#E9E9E9] rounded-[15px] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
        
        <button
          onClick={handleWishlistClick}
          className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200 z-10"
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart
            className={`w-5 h-5 transition-all duration-200 ${
              isWishlisted
                ? 'fill-red-500 stroke-red-500'
                : 'stroke-gray-400 hover:stroke-red-500'
            }`}
          />
        </button>
      </div>

      <div className="p-3">
        <h3 className="text-[14px] font-medium text-black line-clamp-2 mb-1">
          {product.name}
        </h3>
        <p className="text-[16px] font-bold text-black">
          ${product.price}
        </p>
      </div>
    </div>
  );
}
