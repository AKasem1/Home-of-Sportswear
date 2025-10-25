'use client';

import { ArrowLeft, ShoppingBag } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  showCartButton?: boolean;
  onBackClick?: () => void;
  onCartClick?: () => void;
}

export default function Header({
  title,
  showBackButton = true,
  showCartButton = true,
  onBackClick,
  onCartClick,
}: HeaderProps) {
  const router = useRouter();

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      router.back();
    }
  };

  const handleCartClick = () => {
    if (onCartClick) {
      onCartClick();
    } else {
      router.push('/cart');
    }
  };

  return (
    <header className="sticky top-0 left-0 right-0 w-full h-[89px] bg-white border-b border-[#E2E2E2] z-[800] md:h-[72px]">
      <div className="flex items-center justify-between h-full px-5 py-[15px] md:px-8 md:py-4 md:max-w-screen-xl md:mx-auto">
        {/* Back Button */}
        {showBackButton && (
          <button
            onClick={handleBackClick}
            className="flex items-center justify-center p-2 bg-transparent border-none cursor-pointer text-black transition-opacity duration-200 hover:opacity-70 active:opacity-50 focus:outline-none focus:ring-2 focus:ring-[#0C4B54] focus:ring-offset-2 rounded-lg"
            aria-label="Go back"
          >
            <ArrowLeft className="w-6 h-6" strokeWidth={2} />
          </button>
        )}

        {/* Title */}
        <h1 className="flex-1 text-center text-xl font-medium text-[#8899A8] m-0 leading-tight tracking-[-0.01em] md:text-xl">
          {title}
        </h1>

        {/* Cart Button */}
        {showCartButton && (
          <button
            onClick={handleCartClick}
            className="flex items-center justify-center p-2 bg-transparent border-none cursor-pointer text-black transition-opacity duration-200 hover:opacity-70 active:opacity-50 focus:outline-none focus:ring-2 focus:ring-[#0C4B54] focus:ring-offset-2 rounded-lg"
            aria-label="Shopping cart"
          >
            <ShoppingBag className="w-6 h-6" strokeWidth={2} />
          </button>
        )}
      </div>
    </header>
  );
}
