import {create} from 'zustand';

const useStore = create((set) => ({
  bulb: false,
  setBulb: () => set((state) => ({ bulb: !state.bulb })),
}));

export default useStore;
