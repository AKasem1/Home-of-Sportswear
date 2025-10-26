export default function ProductInfo({
    name,
    price,
    brands,
  }: {
    name: string;
    price: string;
    brands: string[];
  }) {
    return (
      <div className="w-full max-w-[394px] md:max-w-none mx-auto md:mx-0 px-4 md:px-0 mt-4 md:mt-0">
        <div className="flex md:flex-col justify-between md:justify-start items-start md:items-start md:space-y-2">
          <div className="flex-1 md:flex-none">
            <div className="text-[#8899A8] text-sm font-medium mb-1">{brands.join(', ')}</div>
            <h1 className="text-black text-xl md:text-3xl font-bold leading-tight">{name}</h1>
          </div>
          <div className="text-black text-2xl md:text-4xl font-bold md:mt-4">${price}</div>
        </div>
      </div>
    );
  }
  