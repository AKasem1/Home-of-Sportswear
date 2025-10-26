'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 md:pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0C4B54]/10 rounded-full border border-[#0C4B54]/20 mb-6">
              <span className="w-2 h-2 bg-[#0C4B54] rounded-full animate-pulse" />
              <span className="text-[#0C4B54] text-sm font-medium">New Collection 2025</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black mb-6 leading-tight">
              Unleash Your
              <span className="block text-[#0C4B54] mt-2">Athletic Power</span>
            </h1>

            {/* Subheading */}
            <p className="text-base md:text-lg lg:text-xl text-[#8899A8] mb-8 leading-relaxed">
              Premium sportswear engineered for champions. Experience unmatched comfort, 
              style, and performance in every move.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/products"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0C4B54] text-white rounded-lg font-semibold text-base hover:bg-[#0A3D44] transition-all hover:gap-4 shadow-lg hover:shadow-xl"
              >
                Shop Now
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0C4B54] rounded-lg font-semibold text-base hover:bg-gray-50 transition-all border-2 border-[#0C4B54]"
              >
                Explore Collections
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#E2E2E2]">
              <div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-1">500+</div>
                <div className="text-xs md:text-sm text-[#8899A8]">Products</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-1">50K+</div>
                <div className="text-xs md:text-sm text-[#8899A8]">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-1">4.8★</div>
                <div className="text-xs md:text-sm text-[#8899A8]">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/athlete.jpg"
                alt="Athletic sportswear"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Decorative Elements */}
              <div className="absolute top-6 right-6 w-20 h-20 bg-[#0C4B54] rounded-full opacity-20 blur-2xl" />
              <div className="absolute bottom-6 left-6 w-32 h-32 bg-[#0C4B54] rounded-full opacity-20 blur-3xl" />
            </div>

            {/* Floating Card - Desktop Only */}
            <div className="hidden lg:block absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-[#E2E2E2]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#0C4B54] rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl font-bold">★</span>
                </div>
                <div>
                  <div className="text-xl font-bold text-black">4.8/5</div>
                  <div className="text-xs text-[#8899A8]">Customer Rating</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator - Desktop Only */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden xl:block">
        <div className="flex flex-col items-center gap-2 text-[#8899A8]">
          <span className="text-xs font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-[#E2E2E2] rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-[#0C4B54] rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
