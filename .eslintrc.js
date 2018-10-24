module.exports = {
  extends: [
    'plugin:prettier/recommended',
    'plugin:vue/strongly-recommended'
  ],
  parserOptions: {
    parser: 'typescript-eslint-parser'
  },
  root: true,
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
