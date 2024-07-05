import { create } from "zustand";

const cursorStore = create((set) => ({
  squresRefs: {},
  addElementRef: ({ route, refs }) => {
    set((state) => ({
      squresRefs: {
        ...state.squresRefs,
        [route]: [...(state.squresRefs[route] || []), ...refs],
      },
    }));
  },
  resetElementRefs: () => {
    set((state) => ({
      squresRefs: {},
    }));
  },
  setElementRefs: ({ route, refs }) => {
    set((state) => ({
      squresRefs: {
        ...state.squresRefs,
        [route]: refs,
      },
    }));
  },
}));

export default cursorStore;
