# ✨ Nuxt 4 starter ✨

This is a boilerplate for starting Nuxt4 projects with Vite, TypeScript, ESLint, Tailwind CSS and Pinia

## Features

- **Vite ⚡**: Utilize the fast build tool for web development.
- **TypeScript 🛡️**: Write safer and more maintainable code with TypeScript.
- **ESLint & Stylistic 🧹**: Maintain code quality and consistency with ESLint (Flat config) and Stylistic.
- **Tailwind CSS 🌬️**: Rapidly build custom user interfaces with Tailwind CSS.
- **Pinia 🍍**: Best store for Vue & Nuxt.
- **Custom Composables 🛠️**: Simplify API handling and metadata management with custom composable utilities like `useApi`.
- Nuxt UI ✨

## Prerequisites

Before getting started, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v22 or higher but LTS `v22.14` recommended)
- [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/) or [Yarn](https://yarnpkg.com/) package manager (pnpm recommended)

## Installation

1. Clone the repo:

```bash
git clone https://github.com/mdotme/nuxt-starter my-awesome-project
```

1. Navigate to the cloned directory:

```bash
cd my-awesome-project
```

1. Enable `corepack`

```bash
corepack enable
```

1. Install deps:

```bash
pnpm i
```

## Configuration

1. In the root directory, there is example env file: `.env.example`.
2. Copy to `.env`:

```bash
cp .env.example .env
```

1. Modify `.env`.

- **ESLint & Prettier**: Configuration files for ESLint in `eslint.config.mts` file.
- **Tailwind CSS**: Customize Tailwind CSS settings in the `./assets/css/tailwind.css` file.

## Project structure

Sample flat project structure for Nuxt4. If your project is more complex and bigger than simple landing page consider using [Nuxt layers](https://nuxt.com/docs/getting-started/layers).

Sample vue file:

```vue
<script setup lang="ts">
interface Props {
  loading?: boolean; // Boolean props should be optional
}
const props = defineProps<Props>();

const emit = defineEmits<{
  submit: [data: Record<string, any>];
}>();

// Project provided first
const { $api } = useNuxtApp();
const route = useRoute();
const { t } = useI18n();
const localePath = useLocalePath()
// Custom composables
const api = useApi()
// Stores
const authStore = useAuthStore() // Name just store if it's related to store like Login.vue

// Other stuff
const data = ref()

function sayHi() {
  console.log("HII")
}

const getData = computed(() => data.value)

watch(data, () => {
  console.log("Do something")
})
const
</script>

<template>...</template>

<style scoped>
...
</style>
```

Directories & Files:

```

/my-awesome-project
  ├── app/
  │    ├── assets/
  │    │    ├── css/
  │    │    ├── fonts/
  │    │    └── images/
  │    │
  │    ├── components/
  │    │    ├── Auth/
  │    │    │    ├── LoginForm.vue
  │    │    │    └── RegisterForm.vue
  │    │    └── User/
  │    │         └── ProfileCard.vue
  │    │
  │    ├── composables/
  │    │    ├── useApi.ts
  │    │    ├── useApiFetch.ts
  │    │
  │    ├── constants/
  │    │    ├── maska.const.ts
  │    │    └── regexes.const.ts
  │    │
  │    ├── layouts/
  │    │    ├── default.vue
  │    │    └── auth.vue
  │    │
  │    ├── middleware/
  │    │    └── auth.global.ts
  │    │
  │    ├── pages/
  │    │    ├── index.vue
  │    │    ├── login.vue
  │    │    ├── register.vue
  │    │    └── profile.vue
  │    │
  │    ├── plugins/
  │    │    └── api.ts
  │    │
  │    ├── stores/
  │    │    ├── auth.store.ts
  │    │    └── user.store.ts
  │    │
  │    ├── types/
  │    │    ├── auth.types.ts
  │    │    ├── common.types.ts
  │    │    └── enums/
  │    │         ├── roles.enum.ts
  │    │         └── status.enum.ts
  │    │
  │    ├── utils/
  │    │    ├── sum.util.ts
  │    │    └── format-date.util.ts
  │    │
  │    ├── app.vue
  │    └── error.vue
  │
  ├── public/
  │    └── favicon.ico
  │
  ├── server/
  │    └── api/ (or any backend logic)
  │
  ├── nuxt.config.ts
  └── package.json
  ...
```

- Composable files must be same as composable function names (`useCamelCase.ts`)
- Middlewares must be `kebab-case.ts`
- Stores must be `kebab-case.store.ts` with store suffix
- Types must be `kebab-case.types.ts` with types suffix
- Enums must be inside types directory and `kebab-case.enum.ts` with enum suffix
- Directories and component names inside `components/` directory all must be `Pascal/Case.vue`
- Utilities must be `kebab-case.util.ts` with util prefix
- Constants must be `kebab-case.const.ts` with const prefix & must use uppercase variable naming: `const RGX_PHONE = /^\d{10,15}$/`

## Contributing

Contributions are welcome! Please feel free to submit issues, feature requests, or pull requests.
