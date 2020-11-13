module.exports = {
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
  extends: 'airbnb',
  rules: {
    'comma-dangle': [2, 'always-multiline'],
    'import/no-unresolved': 0,
    'react/jsx-filename-extension': 0,
  },
};
