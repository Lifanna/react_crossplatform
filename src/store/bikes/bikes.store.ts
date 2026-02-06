// src/stores/useBikesStore.ts
import { create } from "zustand";
import { getBikes, type Bike } from "../../api/bikes/bikes_api";

interface BikesState {
  bikes: Bike[];
  loading: boolean;
  error: string | null;
  fetchBikes: () => Promise<void>;
}

export const useBikesStore = create<BikesState>((set) => ({
  bikes: [],
  loading: false,
  error: null,
  fetchBikes: async () => {
    set({ loading: true, error: null });
    try {
      const bikes = await getBikes();
      set({ bikes, loading: false });
    } catch (err: any) {
      set({ error: err.message || "Failed to fetch bikes", loading: false });
    }
  },
}));
