'use strict';

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'plugin:import/warnings',
    'plugin:regexp/recommended',
    'plugin:etc/recommended',
    'plugin:promise/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    project: ['./tsconfig.eslint.json'],
    sourceType: 'module',
    ecmaFeatures: {
      jsx: false,
    },
    warnOnUnsupportedTypeScriptVersion: false,
  },
  plugins: [
    'import',
    '@typescript-eslint',
    'prettier',
    'simple-import-sort',
    'etc',
    'promise'
  ],
  rules: {
    // core
    'consistent-return': [1, { treatUndefinedAsUnspecified: true }],
    'quotes': [1, 'single', { allowTemplateLiterals: true, avoidEscape: true }],
    'semi': [1, 'always'],
    'max-lines': [1, { max: 300 }],
    'max-params': [1, { max: 5 }],
    'no-unneeded-ternary': [1],
    // import
    'import/max-dependencies': [1, { max: 15 }],
    // simple-import-sort with recomended settings
    'simple-import-sort/imports': 1,
    'simple-import-sort/exports': 1,
    'sort-imports': 0,
    'import/first': 1,
    'import/newline-after-import': 1,
    'import/no-duplicates': 1,
    // typescript-eslint
    '@typescript-eslint/no-floating-promises': 1,
    '@typescript-eslint/no-unnecessary-condition': 1,
    '@typescript-eslint/no-explicit-any': [1, { ignoreRestArgs: true }],
  },
  overrides: [
    {
      files: ['.eslintrc.cjs', '.prettierrc.cjs', '.commitlintrc.js', '*.js'],
      env: {
        node: true,
      },
    },
  ],
};
