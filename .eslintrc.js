module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    'plugin:prettier/recommended',
    'plugin:vue/recommended',
    'prettier'
  ],
  parserOptions: {
    parser: 'typescript-eslint-parser'
  },
  plugins: [
    'prettier',
    'vue'
  ],
  root: true,
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
