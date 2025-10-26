'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { Product, ProductsResponse } from '@/lib/types/product';
import { useFilterStore } from '@/lib/store/useFilterStore';
import ProductCard from '@/components/products/ProductCard';
import { Loader2 } from 'lucide-react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
// console.log('API_BASE_URL:', API_BASE_URL);
const PRODUCTS_PER_PAGE = 12;

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const { brands, sizes, minPrice, maxPrice, minRating, sortBy, sortOrder } = useFilterStore();
  const observerTarget = useRef<HTMLDivElement>(null);

  // Build API query params
  const buildQueryParams = (page: number) => {
    const params = new URLSearchParams();
    
    // Pagination
    params.append('page', page.toString());
    params.append('limit', PRODUCTS_PER_PAGE.toString());
    
    // Filters
    if (brands.length > 0) {
      brands.forEach(brand => params.append('brand', brand));
    }
    
    if (sizes.length > 0) {
      sizes.forEach(size => params.append('size', size));
    }
    
    if (minPrice != null && minPrice > 0) {
      params.append('min_price', minPrice.toString());
    }
    
    if (maxPrice != null && maxPrice < 1000) {
      params.append('max_price', maxPrice.toString());
    }
    
    if (minRating != null && minRating > 0) {
      params.append('min_rating', minRating.toString());
    }
    
    if (sortBy) {
      params.append('sort_by', sortBy);
    }
    
    if (sortOrder) {
      params.append('sort_order', sortOrder);
    }
    
    params.append('status', 'active');
    
    return params.toString();
  };

  // Fetch products
  const fetchProducts = async (page: number, append: boolean = false) => {
    try {
      if (append) {
        setLoadingMore(true);
      } else {
        setLoading(true);
      }
      
      setError(null);
      
      const queryString = buildQueryParams(page);
      const response = await fetch(`${API_BASE_URL}?${queryString}`);
      // console.log('Fetching products with URL:', `${API_BASE_URL}?${queryString}`);
      // console.log('Response:', response);
      
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      
      const data: ProductsResponse = await response.json();
      
      if (data.error) {
        throw new Error(data.message || 'An error occurred');
      }
      
      if (append) {
        setProducts(prev => [...prev, ...data.data]);
      } else {
        setProducts(data.data);
      }
      
      // Check if there are more pages
      setHasMore(data.pagination.current_page < data.pagination.total_pages);
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  // Initial load and filter changes
  useEffect(() => {
    setCurrentPage(1);
    setHasMore(true);
    fetchProducts(1, false);
  }, [brands, sizes, minPrice, maxPrice, minRating, sortBy, sortOrder]);

  // Intersection Observer for infinite scroll
  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const [target] = entries;
    if (target.isIntersecting && hasMore && !loadingMore && !loading) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      fetchProducts(nextPage, true);
    }
  }, [hasMore, loadingMore, loading, currentPage]);

  useEffect(() => {
    const element = observerTarget.current;
    if (!element) return;

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '100px',
      threshold: 0,
    });

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [handleObserver]);

  // Loading state (initial)
  if (loading && products.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-8 h-8 animate-spin text-[#0C4B54]" />
          <p className="text-[#8899A8] text-sm">Loading products...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error && products.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <p className="text-red-500 mb-2">Error loading products</p>
          <p className="text-[#8899A8] text-sm">{error}</p>
          <button
            onClick={() => fetchProducts(1, false)}
            className="mt-4 px-4 py-2 bg-[#0C4B54] text-white rounded-lg hover:bg-[#0A3D44] transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Empty state
  if (products.length === 0 && !loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <p className="text-black text-lg font-medium mb-2">No products found</p>
          <p className="text-[#8899A8] text-sm">Try adjusting your filters</p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-5 py-6 md:px-8">
      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product, index) => (
          <ProductCard key={`${product.id}-${index}`} product={product} />
        ))}
      </div>

      {/* Loading More Indicator */}
      {loadingMore && (
        <div className="flex justify-center items-center py-8">
          <div className="flex items-center gap-2">
            <Loader2 className="w-5 h-5 animate-spin text-[#0C4B54]" />
            <span className="text-[#8899A8] text-sm">Loading more...</span>
          </div>
        </div>
      )}

      {/* Intersection Observer Target */}
      <div ref={observerTarget} className="h-4" />

      {/* End of Results */}
      {!hasMore && products.length > 0 && (
        <div className="text-center py-8">
          <p className="text-[#8899A8] text-sm">You've reached the end</p>
        </div>
      )}
    </div>
  );
}