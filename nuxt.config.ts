import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["assets/css/main.css"],
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxt/eslint", "@nuxt/ui"],
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  compatibilityDate: "2025-12-22",
});
