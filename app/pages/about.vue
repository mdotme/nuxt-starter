<script lang="ts" setup>
const mainStore = useMainStore();
</script>

<template>
  <div>
    <h1>I'm about page</h1>
    <UButton size="xl" @click="mainStore.increase()">
      Count: {{ mainStore.count }}
    </UButton>
  </div>
</template>
