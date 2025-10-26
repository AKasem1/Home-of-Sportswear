'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/lib/store/useCartStore';

export default function Navbar() {
  const items = useCartStore((s) => s.items);
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E2E2E2]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/logo.jpg"
              alt="Sportswear Logo"
              width={120}
              height={40}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-base font-medium text-black hover:text-[#0C4B54] transition-colors"
            >
              Shop
            </Link>
            <Link
              href="/products"
              className="text-base font-medium text-black hover:text-[#0C4B54] transition-colors"
            >
              Collections
            </Link>
            <Link
              href="/"
              className="text-base font-medium text-black hover:text-[#0C4B54] transition-colors"
            >
              About
            </Link>
          </div>

          <Link
            href="/cart"
            className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Shopping cart"
          >
            <ShoppingBag className="w-6 h-6 text-black" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
