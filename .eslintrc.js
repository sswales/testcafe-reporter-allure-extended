module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
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
