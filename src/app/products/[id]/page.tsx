// src/app/products/[id]/page.tsx
'use client';

import { use, useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { ProductDetail } from '@/lib/types/product-detail';
import { useCartStore } from '@/lib/store/useCartStore';
import Header from '@/components/layout/Header';
import ProductImageGallery from '@/components/product-detail/ProductImageGallery';
import ProductInfo from '@/components/product-detail/ProductInfo';
import ProductImageThumbnails from '@/components/product-detail/ProductImageThumbnails';
import SizeSelector from '@/components/product-detail/SizeSelector';
import ProductDescription from '@/components/product-detail/ProductDescription';
import ReviewsSection from '@/components/product-detail/ReviewsSection';
import AddToCartButton from '@/components/product-detail/AddToCartButton';
import { Loader2 } from 'lucide-react';

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [size, setSize] = useState<string | null>(null);
  const addToCart = useCartStore((s) => s.addToCart);

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      try {
        const res = await fetch(`https://task.woosonicpwa.com/api/products/${id}`);
        
        if (!res.ok) {
          throw new Error('Failed to fetch product');
        }
        
        const data = await res.json();
        
        if (data.error) {
          throw new Error(data.message || 'Failed to load product');
        }
        
        setProduct(data.data);
      } catch (error) {
        console.error('Error fetching product:', error);
        toast.error(error instanceof Error ? error.message : 'Failed to load product. Please try again.');
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!size || !product) {
      toast.error('Please select a size first');
      return;
    }

    try {
      addToCart({
        productId: product.id,
        name: product.name,
        image: product.image,
        size,
        quantity: 1,
        price: product.price,
      });
      
      toast.success(`${product.name} (Size: ${size}) added to cart!`, {
        icon: '✅',
      });
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast.error('Failed to add product to cart. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[#8899A8]">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-8 h-8 animate-spin text-[#0C4B54]" />
          <p className="text-sm">Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-2">Product not found</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-[#0C4B54] text-white rounded-lg hover:bg-[#0A3D44] transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white min-h-screen">
      <Header title="" showBackButton showCartButton />
      
      {/* Mobile Layout (< md) */}
      <div className="block md:hidden pb-[160px] space-y-8">
        <ProductImageGallery image={product.image} />
        <ProductInfo name={product.name} price={product.price} brands={product.brands} />
        <ProductImageThumbnails images={[]} />
        <SizeSelector
          sizes={product.available_sizes}
          selectedSize={size}
          setSelectedSize={setSize}
        />
        <ProductDescription description={product.description} />
        <ReviewsSection
          reviews={product.reviews}
          average={product.average_rating}
          count={product.reviews_count}
        />
        
        {/* Fixed Mobile Add to Cart */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E2E2E2] p-4 shadow-lg">
          <AddToCartButton
            price={product.price}
            disabled={!size}
            onClick={handleAddToCart}
          />
        </div>
      </div>

      {/* Desktop Layout (>= md) - 2 Column */}
      <div className="hidden md:block max-w-7xl mx-auto px-8 py-8 gap-12">
        <div className="grid grid-cols-2 gap-12">
          {/* Left Column - Image */}
          <div className="space-y-4">
            <ProductImageGallery image={product.image} />
            <ProductImageThumbnails images={[]} />
          </div>

          {/* Right Column - Info */}
          <div className="space-y-6">
            <ProductInfo name={product.name} price={product.price} brands={product.brands} />
            <SizeSelector
              sizes={product.available_sizes}
              selectedSize={size}
              setSelectedSize={setSize}
            />
            <ProductDescription description={product.description} />
            <div className="pt-4">
              <AddToCartButton
                price={product.price}
                disabled={!size}
                onClick={handleAddToCart}
              />
            </div>
          </div>
        </div>

        {/* Reviews Section - Full Width Below */}
        <div className="mt-12">
          <ReviewsSection
            reviews={product.reviews}
            average={product.average_rating}
            count={product.reviews_count}
          />
        </div>
      </div>
    </div>
  );
}
