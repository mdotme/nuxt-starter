import simpleImportSort from 'eslint-plugin-simple-import-sort';
import prettierPlug from 'eslint-plugin-prettier/recommended';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  files: [
    // "./assets/**/*.css",
    './composables/**/*.{ts,tsx}',
    './components/**/*.{vue,ts,tsx}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './stores/**/*.ts',
    './server/**/*.ts',
    './nuxt.config.ts',
    './app.config.ts',
    './eslint.config.{mjs,js,cjs}',
    './app.vue',
    './error.vue',
    './layers/**/*.{ts,vue}',
  ],
  rules: {
    'no-console': 'warn',
    'no-warning-comments': [
      'warn',
      {
        terms: ['fix', 'fixme', 'testing', 'noprod'],
        location: 'anywhere',
      },
    ],
    // Some GTS rules
    // Enforces the 'function' keyword for named declarations, allowing arrows only for inline callbacks
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'no-var': 'error', // Force let/const (absolutely no var declarations)
    'prefer-const': 'error', // Force const if variable is never reassigned
    'no-new-object': 'error', // Enforce object literals over new Object()
    'no-array-constructor': 'warn', // Array literals over new Array()
    eqeqeq: ['error', 'always'], // Require strict === and !==
    'no-eval': 'error', // Ban eval()
    'no-implied-eval': 'error', // Ban implicit eval strings
  },
})
  .prepend(prettierPlug, {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
  })
  .overrideRules({
    'prettier/prettier': [
      'warn',
      {
        semi: true,
        singleQuote: true,
        bracketSpacing: true,
        arrowParens: 'always',
        trailingComma: 'es5',
      },
    ],
    'simple-import-sort': 'error',
  })
  .override('nuxt/typescript/rules', {
    rules: {
      // Prefer interfaces over type literal aliases (https://google.github.io/styleguide/tsguide.html#prefer-interfaces)
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/consistent-type-assertions': [
        'error',
        {
          // Enforce 'as Type' instead of '<Type>'
          assertionStyle: 'as',
          objectLiteralTypeAssertions: 'never',
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          // Errors out on unused vars, ignoring underscores
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
    },
  })
  .override('nuxt/vue/rules', {
    rules: {
      'vue/max-attributes-per-line': 'off',
      'vue/html-self-closing': 'off',
      'vue/multi-word-component-names': 'off',
    },
  });
