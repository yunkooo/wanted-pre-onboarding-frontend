module.exports = {
  env: {
    browser: true,
    es6: true,
  },

  extends: ['react-app', 'naver', 'eslint:recommended', 'plugin:prettier/recommended', 'prettier'],
  plugins: ['react'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  rules: {
    'import/prefer-default-export': 0,
    'no-console': 1,
    'no-unused-vars': 'warn',
    'object-curly-newline': 0,
    'no-shadow': 0,
    'consistent-return': 0,
    'no-alert': 0,
    'react-hooks/exhaustive-deps': 0,
  },
};
