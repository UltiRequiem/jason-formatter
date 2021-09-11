module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    es6: true
  },
  ignorePatterns: ['node_modules', 'build'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  'import/resolver': {
    node: {
      extensions: ['.ts']
    }
  },
  extends: [
    'airbnb-base',
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  rules: {
    quotes: ['warn', 'single', 'avoid-escape']
  }
}
