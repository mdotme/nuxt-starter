<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Index",
    to: "/",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "To-Do single",
    to: "/todos/1",
  },
  {
    icon: "i-lucide-github",
    label: "Repo",
    to: "https://manuchehr.me/r/nuxt-starter",
    target: "_blank",
  },
]);
</script>

<template>
  <div>
    <NuxtLoadingIndicator color="var(--color-primary)" />

    <UHeader :items>
      <UNavigationMenu :items="items" />
    </UHeader>

    <NuxtPage />

    <footer>Some copyright things</footer>
  </div>
</template>
