import create from "zustand";

export const useStore = create((set) => ({
  bears: 0,
  text: "Hello",
  increase: () => set((state) => ({ bears: state.bears + 1 })),
  decrease: () => set((state) => ({ bears: state.bears - 1 })),
}));
