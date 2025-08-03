import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["assets/css/tailwind.css"],
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxt/eslint"],
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  compatibilityDate: "2025-07-15",
});
