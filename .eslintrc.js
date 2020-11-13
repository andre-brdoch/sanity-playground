module.exports = {
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
  extends: 'airbnb',
  rules: {
    'comma-dangle': [2, 'always-multiline'],
    'no-underscore-dangle': 0,
    'import/no-unresolved': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-filename-extension': 0,
  },
};
