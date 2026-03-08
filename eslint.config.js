import js from '@eslint/js';
import astroPlugin from 'eslint-plugin-astro';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
  // Base JavaScript configuration
  js.configs.recommended,

  // Node.js API files configuration
  {
    files: ['src/pages/api/**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
      },
      globals: {
        console: 'readonly',
        process: 'readonly',
        Response: 'readonly',
        Request: 'readonly',
        URL: 'readonly',
        Date: 'readonly',
        Promise: 'readonly',
        Array: 'readonly',
        Object: 'readonly',
        JSON: 'readonly',
        Error: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_|^error$|^e$' }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': 'off', // Allow console in API files
      'no-unused-vars': 'off', // Let TypeScript handle this
      'no-empty': 'off',
    },
  },

  // TypeScript configuration
  {
    files: ['**/*.ts', '**/*.tsx'],
    ignores: ['src/pages/api/**/*.ts'], // Skip API files, handled above
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
      },
      globals: {
        console: 'readonly',
        document: 'readonly',
        window: 'readonly',
        navigator: 'readonly',
        location: 'readonly',
        fetch: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        NodeJS: 'readonly',
        URL: 'readonly',
        dataLayer: 'readonly',
        gtag: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_|^error$|^e$|^index$|^subject$|^slug$|^book$|^t$' },
      ],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-unused-vars': 'off', // Let TypeScript handle this
      'no-empty': 'off',
    },
  },

  // Astro configuration
  ...astroPlugin.configs.recommended,

  // JSX Accessibility configuration
  {
    files: ['**/*.astro', '**/*.jsx', '**/*.tsx'],
    plugins: {
      'jsx-a11y': jsxA11y,
    },
    rules: {
      ...jsxA11y.configs.recommended.rules,
      'jsx-a11y/anchor-is-valid': 'off', // Astro handles this differently
      'jsx-a11y/no-autofocus': 'off', // Sometimes needed for modals
      'jsx-a11y/label-has-associated-control': 'off', // Astro handles this differently
    },
  },

  // General configuration
  {
    languageOptions: {
      globals: {
        console: 'readonly',
        document: 'readonly',
        window: 'readonly',
        navigator: 'readonly',
        location: 'readonly',
        fetch: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        URL: 'readonly',
        dataLayer: 'readonly',
        gtag: 'readonly',
        Date: 'readonly',
        Promise: 'readonly',
        Array: 'readonly',
        Object: 'readonly',
        JSON: 'readonly',
        Error: 'readonly',
      },
    },
    rules: {
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern:
            '^_|^error$|^e$|^index$|^subject$|^slug$|^book$|^t$|^selectedSubject$|^currentSubject$|^hiddenCount$|^getDifficultyColor$|^BookCard$|^defaultLang$|^description$|^amazonLink$|^price$|^rating$|^tags$',
        },
      ],
      'prefer-const': 'warn',
      'no-var': 'error',
      'no-empty': 'off', // Allow empty catch blocks
      'no-undef': 'off', // Let TypeScript handle this
    },
  },

  // Ignore patterns
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '.astro/**',
      'public/**',
      '*.min.js',
      '*.config.js',
      '*.config.mjs',
    ],
  },
];
