export default function SizeSelector({
    sizes,
    selectedSize,
    setSelectedSize,
  }: {
    sizes: string[];
    selectedSize: string | null;
    setSelectedSize: (size: string) => void;
  }) {
    const handleSizeClick = (size: string) => {
      if (selectedSize === size) {
        setSelectedSize('');
      } else {
        setSelectedSize(size);
      }
    };
  
    return (
      <div className="w-full max-w-[394px] md:max-w-none mx-auto md:mx-0 px-4 md:px-0">
        <h3 className="text-lg font-semibold mb-3">Size</h3>
        <div className="flex flex-wrap gap-3">
          {sizes.map((size) => (
            <button
              key={size}
              className={`
                w-[69px] h-[60px] rounded-[10px] p-[10px] 
                flex items-center justify-center text-base font-medium border transition
                cursor-pointer
                ${selectedSize === size
                  ? "bg-[#0C4B54] text-white border-[#0C4B54]"
                  : "bg-white text-black border-[#E2E2E2] hover:border-[#0C4B54]"
                }
              `}
              onClick={() => handleSizeClick(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    );
  }
  