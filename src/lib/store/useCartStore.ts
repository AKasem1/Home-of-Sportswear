import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, CartState } from '../types/cart';

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addToCart: (item) => {
        set((state) => {
          const exists = state.items.find(
            (x) => x.productId === item.productId && x.size === item.size
          );
          if (exists) {
            return {
              items: state.items.map((i) =>
                i.productId === item.productId && i.size === item.size
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              ),
            };
          }
          return { items: [...state.items, item] };
        });
      },
      removeFromCart: (productId, size) =>
        set((state) => ({
          items: state.items.filter(
            (x) => !(x.productId === productId && x.size === size)
          ),
        })),
      updateQuantity: (productId, size, quantity) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.productId === productId && i.size === size
              ? { ...i, quantity }
              : i
          ),
        })),
      clearCart: () => set({ items: [] }),
      getTotalPrice: () =>
        get().items.reduce(
          (acc, i) => acc + Number(i.price) * (i.quantity ?? 1),
          0
        ),
    }),
    { name: 'cart-storage' }
  )
);
