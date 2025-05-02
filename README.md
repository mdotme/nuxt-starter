# Nuxt3 Boilerplate with Vite, TypeScript, ESLint, Prettier, Tailwind CSS, Pinia & Docker

This is a boilerplate for starting Nuxt3 projects with Vite, TypeScript, ESLint, Stylistic, Tailwind CSS, Pinia, Docker, and custom composable utilities for API handling (`useApi`) and metadata management (`useMeta`).

## Features

- **Vite**: Utilize the fast build tool for web development.
- **TypeScript**: Write safer and more maintainable code with TypeScript.
- **ESLint & Stylistic**: Maintain code quality and consistency with ESLint (Flat config) and Stylistic.
- **Tailwind CSS**: Rapidly build custom user interfaces with Tailwind CSS.
- **Pinia**: Best store for vue & nuxt
- **Docker**: Containerize your application for easy deployment and scalability.
- **Custom Composables**: Simplify API handling and metadata management with custom composable utilities like `useApi` and `useMeta`.

## Prerequisites

Before getting started, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher but LTS v20.11 recommended)
- [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/) or [Yarn](https://yarnpkg.com/) package manager (pnpm recommended)
- [Docker](https://www.docker.com/) (if you plan to use Docker for containerization)

## Installation

1. Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/manuchekhr32/nuxt-starter
```

2. Navigate to the cloned directory:

```bash
cd nuxt3-starter
```

3. Install the project dependencies using NPM:

```bash
pnpm i
```

## Configuration

1. In the root directory of the project, you will find a file named `.env.example`.
2. Make a copy of this file and rename it to `.env`:

```bash
cp .env.example .env
```

3. Open the newly created `.env` file in a text editor and update the necessary configuration values according to your project.

- **ESLint & Prettier**: Configuration files for ESLint and Prettier can be found in the project root.
- **Tailwind CSS**: Customize Tailwind CSS settings in the `./assets/css/tailwind.css` file.

## Usage

To start the development server, run the following command:

```
pnpm dev
```

This command will compile the project and launch a local development server. Access `http://localhost:3000` in your browser to view the application.

### Running with Docker

If you prefer to use Docker for running the project, make sure Docker is installed on your machine. Then, follow these steps:

1. Build the Docker image:

```bash
docker build -t nuxt-starter .
```

2. Start a Docker container using the built image:

```bash
docker run -p 3000:3000 nuxt-starter
```

This will launch the application inside a Docker container. Access `http://localhost:3000` in your browser to view the application.

## Building for Production

To build the project for production, use the following command:

```
pnpm build
```

The optimized and minified code will be generated in the `dist` directory.

## Contributing

Contributions are welcome! Please feel free to submit issues, feature requests, or pull requests.
