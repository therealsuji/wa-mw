import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  category: string;
  size?: string; // Optional for non-clothing items
  qty: number;
};

type CartStore = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "qty"> & { qty?: number }) => void;
  updateQuantity: (id: number, size: string | undefined, qty: number) => void;
  removeItem: (id: number, size: string | undefined) => void;
  clearCart: () => void;
  getItemCount: () => number;
  getSubtotal: () => number;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) => {
        const qty = item.qty ?? 1;
        set((state) => {
          // Check if item with same id and size already exists
          const existingItemIndex = state.items.findIndex(
            (i) => i.id === item.id && i.size === item.size,
          );

          if (existingItemIndex > -1) {
            // Update quantity if item exists
            const newItems = [...state.items];
            newItems[existingItemIndex] = {
              ...newItems[existingItemIndex]!,
              qty: newItems[existingItemIndex]!.qty + qty,
            };
            return { items: newItems };
          } else {
            // Add new item
            return {
              items: [...state.items, { ...item, qty }],
            };
          }
        });
      },

      updateQuantity: (id, size, qty) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id && item.size === size ? { ...item, qty } : item,
          ),
        }));
      },

      removeItem: (id, size) => {
        set((state) => ({
          items: state.items.filter(
            (item) => !(item.id === id && item.size === size),
          ),
        }));
      },

      clearCart: () => {
        set({ items: [] });
      },

      getItemCount: () => {
        return get().items.reduce((total, item) => total + item.qty, 0);
      },

      getSubtotal: () => {
        return get().items.reduce(
          (total, item) => total + item.price * item.qty,
          0,
        );
      },
    }),
    {
      name: "cart-storage",
    },
  ),
);
