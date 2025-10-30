// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      'max-len': ['error', {
        code: 100,
        comments: 80,
        ignorePattern: '^import .*'
      }],
      'semi': ['error', 'always'],
      'comma-dangle': ['error', {
        "arrays": 'always-multiline',
        "objects": 'only-multiline',
        "imports": 'never',
        "exports": 'never',
        "functions": 'never'
      }],
      'object-curly-spacing': ['error', 'always'],
      'linebreak-style': 0
    },
  },
);