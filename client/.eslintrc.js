module.exports = {
  extends: 'airbnb',
  rules: {
    'react/prefer-stateless-function': false,
    'react/jsx-filename-extension': false,
    'no-shadow': 0,
    "arrow-body-style": 0,
    'import/no-dynamic-require': 0,
    'global-require': 0,
    'no-underscore-dangle': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'no-else-return': 0,
    'class-methods-use-this': 0,
    'no-confusing-arrow': 0,
  },
  "globals": {
    "localStorage": true,
    "fetch": true,
    "window": true,
    "document": true,
  },
};
