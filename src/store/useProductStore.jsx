import {create} from 'zustand';

const useProductStore = create(set => ({
  trendingItems: [],
  recommendedItems: [],
  newItems: [],
  setTrendingItems: items => set({ trendingItems: items }),
  setRecommendedItems: items => set({ recommendedItems: items }),
  setNewItems: items => set({ newItems: items }),
}));

export default useProductStore;