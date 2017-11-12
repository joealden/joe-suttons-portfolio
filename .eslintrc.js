module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  plugins: ['html'],
  rules: {
    semi: 0,
    'no-unneeded-ternary': 0,
    'space-before-function-paren': 0
  }
}
