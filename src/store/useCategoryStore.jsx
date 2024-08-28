import { create } from "zustand";

const useCategoryStore = create((set) => ({
  childCategories: [],
  setChildCategories: (categories) => set({ childCategories: categories }),
}));

export default useCategoryStore;
