export interface Product {
    id: number;
    image: string;
    price: string;
    status: 'active' | 'inactive';
    name: string;
    description: string;
    brands: string[];
    sizes: string[];
    average_rating: number;
    reviews_count: number;
    created_at: string;
    updated_at: string;
  }
  
  export interface ProductsResponse {
    status: number;
    error: boolean;
    message: string;
    data: Product[];
    pagination: {
      total: number;
      count: number;
      per_page: number;
      current_page: number;
      total_pages: number;
    };
  }
  
  export interface SingleProductResponse {
    status: number;
    error: boolean;
    message: string;
    data: Product;
  }
  
  export interface Review {
    id: number;
    user_name: string;
    user_avatar?: string;
    rating: number;
    comment: string;
    created_at: string;
  }