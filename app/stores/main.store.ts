import { defineStore } from "pinia";

export const useMainStore = defineStore("main", () => {
  const count = ref(0);

  function increase() {
    count.value++;
  }

  return {
    count,
    increase,
  };
});
