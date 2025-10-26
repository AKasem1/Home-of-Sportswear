'use client';

import { SlidersHorizontal } from 'lucide-react';

interface FloatingFilterButtonProps {
  onClick: () => void;
}

export default function FloatingFilterButton({ onClick }: FloatingFilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        fixed bottom-6 right-6 z-30
        w-14 h-14 md:w-16 md:h-16
        bg-[#0C4B54] text-white
        rounded-full shadow-lg
        flex items-center justify-center
        hover:bg-[#0A3D44] transition-all duration-300
        hover:scale-110 active:scale-95
      "
      aria-label="Open filters"
    >
      <SlidersHorizontal className="w-6 h-6 md:w-7 md:h-7" />
    </button>
  );
}
