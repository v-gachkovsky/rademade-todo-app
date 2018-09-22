module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  plugins: ['redux-saga', 'react', 'jsx-a11y'],
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  'rules': {
    'import/first': 0,
    'react/sort-comp': 0,
    'no-case-declarations': 0,
    'no-unused-expressions': 0,
    'react/no-array-index-key': 0,
    'arrow-parens': [
      'error',
      'as-needed'
    ],
    'arrow-body-style': 0,
    'no-shadow': 0,
    'consistent-return': 0,
    'class-methods-use-this': 0,
    'comma-dangle': [
      'error',
      'never'
    ],
    'quote-props': 0,
    'no-param-reassign': 0,
    'import/imports-first': 0,
    'import/newline-after-import': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 2,
    'import/no-webpack-loader-syntax': 0,
    'import/prefer-default-export': 0,
    'indent': [
      2,
      2,
      {
        'SwitchCase': 1
      }
    ],
    'jsx-a11y/aria-props': 2,
    'jsx-a11y/heading-has-content': 0,
    'jsx-a11y/href-no-hash': [0],
    'jsx-a11y/label-has-for': 2,
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props': 2,
    'max-len': 0,
    'newline-per-chained-call': 0,
    'no-confusing-arrow': 0,
    'no-console': 0,
    'no-use-before-define': 0,
    'prefer-template': 2,
    'react/forbid-prop-types': 0,
    'react/jsx-first-prop-new-line': [
      2,
      'multiline'
    ],
    'react/jsx-filename-extension': 0,
    'react/jsx-no-target-blank': 0,
    'react/jsx-curly-spacing': [
      2,
      'always'
    ],
    'react/require-default-props': 0,
    'react/require-extension': 0,
    'react/self-closing-comp': 0,
    'redux-saga/no-yield-in-race': 2,
    'redux-saga/yield-effects': 2,
    'require-yield': 0
  }
};
