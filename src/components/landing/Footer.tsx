'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0C4B54] text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Sportswear</h3>
            <p className="text-white/70 text-sm mb-6">
              Premium athletic wear designed for champions who never settle for less.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Shop</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/products" className="text-white/70 hover:text-white transition-colors text-sm">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/70 hover:text-white transition-colors text-sm">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/70 hover:text-white transition-colors text-sm">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/70 hover:text-white transition-colors text-sm">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-white/70 text-sm mb-4">
              Subscribe to get special offers and updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-white/40"
              />
              <button className="px-4 py-2 bg-white text-[#0C4B54] rounded-lg hover:bg-white/90 transition-colors">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-sm">
            © 2025 Sportswear. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-white/70 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/70 hover:text-white transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="#" className="text-white/70 hover:text-white transition-colors text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
