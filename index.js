module.exports = {
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
  ],
  rules: {
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'array-bracket-spacing': [
      'error',
      'never',
    ],
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'block-spacing': 'error',
    'brace-style': 'error',
    camelcase: 'off',
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'comma-style': [
      'error',
      'last',
    ],
    curly: 'error',
    'default-case': 'error',
    'default-param-last': 'error',
    'dot-notation': 'error',
    'eol-last': [
      'error',
      'always',
    ],
    eqeqeq: 'error',
    'func-call-spacing': [
      'error',
      'never',
    ],
    indent: [
      'error',
      2,
    ],
    'key-spacing': [
      'error',
      {
        afterColon: true,
        beforeColon: false,
        mode: 'strict',
      },
    ],
    'keyword-spacing': [
      'error',
      {
        before: true,
      },
    ],
    'lines-between-class-members': [
      'error',
      'always',
    ],
    'new-parens': 'error',
    'no-alert': 'error',
    'no-constructor-return': 'error',
    'no-duplicate-imports': 'error',
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
      },
    ],
    'no-multi-spaces': 'error',
    'no-param-reassign': 'warn',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-unused-vars': 'off',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-warning-comments': 'warn',
    'no-whitespace-before-property': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
    quotes: [
      'error',
      'single',
    ],
    'require-await': 'error',
    semi: 'error',
    'semi-style': [
      'error',
      'last',
    ],
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      'always',
    ],
    'space-in-parens': [
      'error',
      'never',
    ],
    'space-infix-ops': 'error',
    strict: 'error',
    'switch-colon-spacing': 'error',
    'template-curly-spacing': 'error',
    yoda: 'error',
  },
};
