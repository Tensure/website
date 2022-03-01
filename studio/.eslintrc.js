const path = require('path')

module.exports = {
  extends: ['standard', 'standard-react'],
  ignorePatterns: ["node_modules/"],
  parser: 'babel-eslint',
  rules: {
    'react/prop-types': 0,
    'object-curly-spacing': ['error', 'never'],
    'indent': 0

  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.2.0'
    }
  }
}
