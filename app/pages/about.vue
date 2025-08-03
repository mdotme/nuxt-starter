<script lang="ts" setup>
const mainStore = useMainStore();
</script>

<template>
  <div>
    <h1>I'm about page</h1>
    <button @click="mainStore.increase()">
      Count: {{ mainStore.getCount }}
    </button>
  </div>
</template>
