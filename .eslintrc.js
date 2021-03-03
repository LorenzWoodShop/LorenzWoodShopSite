module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/typescript'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "no-mixed-spaces-and-tabs": [0],
    "no-tabs": 0,
    "skipBlankLines": 0,
    "ignoreComments": 0,
    "no-trailing-spaces": [2, { "skipBlankLines": true }],
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
}
