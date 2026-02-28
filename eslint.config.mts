import simpleImportSort from "eslint-plugin-simple-import-sort";
import prettierPlug from "eslint-plugin-prettier/recommended";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  files: [
    // "./assets/**/*.css",
    "./composables/**/*.{ts,tsx}",
    "./components/**/*.{vue,ts,tsx}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./stores/**/*.ts",
    "./server/**/*.ts",
    "./nuxt.config.ts",
    "./app.config.ts",
    "./eslint.config.{mjs,js,cjs}",
    "./app.vue",
    "./error.vue",
    "./layers/**/*.{ts,vue}",
  ],
  rules: {
    "no-console": "warn",
    "no-warning-comments": [
      "warn",
      {
        terms: ["fix", "fixme", "testing", "noprod"],
        location: "anywhere",
      },
    ],
  },
})
  .prepend(prettierPlug, {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
  })
  .override("nuxt/typescript/rules", {
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  })
  .override("nuxt/vue/rules", {
    rules: {
      "vue/max-attributes-per-line": "off",
      "vue/html-self-closing": "off",
      "vue/multi-word-component-names": "off",
    },
  })
  .overrideRules({
    "prettier/prettier": "warn",
    "simple-import-sort": "error",
  });
