module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'vue',
    'plugin:vue/base',
    '@nuxtjs',
  ],
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never',
      },
    ],
    semi: [2, 'never'],
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
        },
      },
    ],
  },
}
