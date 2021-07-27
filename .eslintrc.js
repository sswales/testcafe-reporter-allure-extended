module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  parserOptions: {
    project: ['./tsconfig.test.json'],
  },
  extends: ['airbnb-typescript/base', 'plugin:prettier/recommended'],
  ignorePatterns: ['docs/**/*.js'],
  overrides: [
    {
      files: '**/e2e/*.*',
      globals: {
        fixture: false,
        test: false,
      },
    },
  ],
};
