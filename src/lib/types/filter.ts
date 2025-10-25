// lib/types/filter.ts

export type SortOption = 'price' | 'rating' | 'created_at';
export type SortOrder = 'asc' | 'desc';
export type SizeOption = 'XS' | 'S' | 'M' | 'L' | 'XL';
export type BrandOption = 'Nike' | 'Adidas' | 'Puma' | 'Reebok';

export interface FilterState {
  brands: string[];
  sizes: SizeOption[];
  minPrice: number | null;
  maxPrice: number | null;
  minRating: number | null;
  sortBy: SortOption;
  sortOrder: SortOrder;
  page: number;
}

export interface PriceRange {
  label: string;
  min: number;
  max: number;
  id: string;
}

export interface SortConfig {
  label: string;
  value: SortOption;
  order: SortOrder;
}

export interface RatingOption {
  label: string;
  value: number | null;
}
