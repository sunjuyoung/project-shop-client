import { create } from "zustand";

const useCartStore = create((set, get) => ({
  cartItems: [],

  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cartItems.find((i) => i.id === item.id);
      if (existingItem) {
        return {
          cartItems: state.cartItems.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return {
        cartItems: [
          ...state.cartItems,
          { ...item, quantity: 1, selected: true },
        ],
      };
    }),

  removeFromCart: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),

  updateQuantity: (id, quantity) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
      ),
    })),

  toggleSelect: (id) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      ),
    })),

  clearCart: () => set({ cartItems: [] }),

  getTotalPrice: () => {
    return get().cartItems.reduce(
      (total, item) =>
        item.selected ? total + item.price * item.quantity : total,
      0
    );
  },

  getTotalItems: () => {
    return get().cartItems.reduce((total, item) => total + item.quantity, 0);
  },

  getSelectedItems: () => {
    return get().cartItems.filter((item) => item.selected);
  },
}));

export default useCartStore;
