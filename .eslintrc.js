module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    'plugin:prettier/recommended',
    'plugin:vue/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'prettier',
    'vue'
  ],
  root: true,
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
