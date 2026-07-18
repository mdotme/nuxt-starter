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

## Contributing

Contributions are welcome! Please feel free to submit issues, feature requests, or pull requests.
