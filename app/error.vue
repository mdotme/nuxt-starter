<script setup lang="ts">
import type { NuxtError } from "#app";

interface Props {
  error: NuxtError;
}
defineProps<Props>();
</script>

<template>
  <div>
    <pre>{{ error }}</pre>
  </div>
</template>
