'use strict';

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { project: ['./tsconfig.eslint.json'] },
  plugins: ['prettier', '@typescript-eslint'],
  root: true,
  overrides: [
    {
      files: ['.eslintrc.js', '.prettierrc.js', '.commitlintrc.js', '*.js'],
      env: {
        node: true,
      },
    },
  ],
};
