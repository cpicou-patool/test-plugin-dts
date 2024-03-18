/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    '@vue/prettier'
  ],
  rules: {
    'vue/html-quotes': [
      'error',
      'double',
      {
        avoidEscape: false
      }
    ]
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
