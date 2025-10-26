export interface Review {
    reviewer: string;
    comment: string;
    rating: number;
    created_at: string;
  }
  
  export interface ProductDetail {
    id: number;
    image: string;
    price: string;
    status: 'active' | 'inactive';
    name: string;
    description: string;
    brands: string[];
    available_sizes: string[];
    average_rating: number;
    reviews_count: number;
    reviews: Review[];
    created_at: string;
    updated_at: string;
  }
  