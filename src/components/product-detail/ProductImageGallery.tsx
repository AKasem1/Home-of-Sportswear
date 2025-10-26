import Image from 'next/image';

export default function ProductImageGallery({ image }: { image: string }) {
  return (
    <div className="w-full md:w-auto md:h-[500px] h-[387px] bg-[#E9E9E9] relative overflow-hidden rounded-none md:rounded-[15px]">
      <Image
        src={image}
        alt="Product"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />
    </div>
  );
}
