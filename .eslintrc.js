module.exports = {
  extends: [
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'prettier/vue'
  ],
  parserOptions: {
    parser: 'typescript-eslint-parser'
  },
  root: true,
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any'
        }
      }
    ]
  }
}
