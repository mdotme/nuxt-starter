import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    count: 0,
  }),
  getters: {
    getCount: (state) => state.count,
  },
  actions: {
    increase() {
      this.count++;
    },
  },
});
