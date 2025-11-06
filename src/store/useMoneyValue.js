import { create } from "zustand";

// Cria o hook da store
const useStore = create((set) => ({
  dolar: 0,
  euro: 0,
  setEuro: (value) => set((state) => ({ ...state, euro: value })),
  setDolar: (value) => set((state) => ({ ...state, dolar: value })),
}));

export default useStore;
