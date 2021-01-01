module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['simple-import-sort'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'eol-last': ['error', 'always'],
    semi: 2,
    indent: ['error', 2, { SwitchCase: 1 }],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    'comma-spacing': ['error', { before: false, after: true }],
    'object-curly-spacing': ['error', 'always', { objectsInObjects: false }],
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape: true,
      },
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
    'react/prop-types': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
