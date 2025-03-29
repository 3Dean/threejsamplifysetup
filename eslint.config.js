import js from '@eslint/js';
import prettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  {
    rules: {
      // your custom rules
    },
  },
  prettier,
];
