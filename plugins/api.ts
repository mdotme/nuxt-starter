export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const api = $fetch.create({
    baseURL: config.public.apiBase,
  });
  nuxtApp.provide("api", api);
  // Your logic goes here
});
