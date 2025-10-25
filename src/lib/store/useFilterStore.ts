import { create } from 'zustand';
import { FilterState, SizeOption, BrandOption } from '../types/filter';

interface FilterStore extends FilterState {
  setSelectedBrands: (brands: string[]) => void;
  toggleBrand: (brand: string) => void;
  setSelectedSizes: (sizes: SizeOption[]) => void;
  toggleSize: (size: SizeOption) => void;
  setPriceRange: (min: number | null, max: number | null) => void;
  setRating: (rating: number | null) => void;
  setSorting: (sortBy: FilterState['sortBy'], sortOrder: FilterState['sortOrder']) => void;
  setPage: (page: number) => void;
  clearFilters: () => void;
}

const initialState: FilterState = {
  brands: [],
  sizes: [],
  minPrice: null,
  maxPrice: null,
  minRating: null,
  sortBy: 'rating',
  sortOrder: 'desc',
  page: 1,
};

export const useFilterStore = create<FilterStore>((set) => ({
  ...initialState,
  setSelectedBrands: (brands) => set({ brands, page: 1 }),
  toggleBrand: (brand) =>
    set((state) => ({
      brands: state.brands.includes(brand)
        ? state.brands.filter((b) => b !== brand)
        : [...state.brands, brand],
      page: 1,
    })),
  setSelectedSizes: (sizes) => set({ sizes, page: 1 }),
  toggleSize: (size) =>
    set((state) => ({
      sizes: state.sizes.includes(size)
        ? state.sizes.filter((s) => s !== size)
        : [...state.sizes, size],
      page: 1,
    })),
  setPriceRange: (minPrice, maxPrice) => set({ minPrice, maxPrice, page: 1 }),
  setRating: (minRating) => set({ minRating, page: 1 }),
  setSorting: (sortBy, sortOrder) => set({ sortBy, sortOrder, page: 1 }),
  setPage: (page) => set({ page }),
  clearFilters: () => set(initialState),
}));
