export interface CartItem {
    productId: number;
    name: string;
    price: string;
    image: string;
    size: string;
    quantity: number;
  }
  
  export interface CartState {
    items: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (productId: number, size: string) => void;
    updateQuantity: (productId: number, size: string, quantity: number) => void;
    clearCart: () => void;
    getTotalPrice: () => number;
  }
  