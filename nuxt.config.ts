// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "@nuxt/eslint"],
  compatibilityDate: "2024-12-12",
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE,
    },
  },
});
