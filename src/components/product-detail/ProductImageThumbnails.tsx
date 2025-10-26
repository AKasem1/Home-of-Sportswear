export default function ProductImageThumbnails({ images }: { images: string[] }) {
    // If no images, show 4 placeholder rectangles
    const placeholders = images && images.length > 0 ? images : Array(4).fill(null);
    
    return (
      <div className="w-full max-w-[394px] md:max-w-none mx-auto md:mx-0 px-4 md:px-0 mt-4">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {placeholders.map((img, idx) => (
            <div
              key={idx}
              className="rounded-[15px] min-w-[90px] w-[90px] h-[77px] bg-[#E9E9E9] overflow-hidden relative flex-shrink-0"
            >
              {img && <img src={img} alt="" className="object-cover w-full h-full" />}
            </div>
          ))}
        </div>
      </div>
    );
  }
  