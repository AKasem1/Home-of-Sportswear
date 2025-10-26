export default function AddToCartButton({
    onClick,
    disabled,
    price,
  }: {
    onClick: () => void;
    disabled: boolean;
    price: string;
  }) {
    return (
      <div className="w-full max-w-[394px] md:max-w-none mx-auto md:mx-0 px-4 md:px-0">
        <div className="flex justify-between items-center mb-4">
          <div>
            <div className="text-base font-semibold text-black">Total Price</div>
            <div className="text-xs text-[#8899A8]">with VAT,SD</div>
          </div>
          <div className="text-2xl font-bold text-black">${price}</div>
        </div>
  
        <button
          disabled={disabled}
          onClick={onClick}
          className={`
            w-full h-[58px] rounded-[12px] bg-[#0C4B54] text-white 
            flex items-center justify-center gap-3
            text-lg font-semibold transition 
            disabled:bg-[#B0BEC5] disabled:cursor-not-allowed
            hover:bg-[#0A3D44] disabled:hover:bg-[#B0BEC5]
            cursor-pointer
          `}
        >
          <span className="text-2xl font-bold">+</span>
          Add to Cart
        </button>
      </div>
    );
  }
  