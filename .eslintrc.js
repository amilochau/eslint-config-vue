module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    require.resolve('./index')
  ],

  overrides: [{
    files: ['test/**.spec.js'],
    env: {
      jest: true
    },
    rules: {
      '@typescript-eslint/no-var-requires': 'off'
    }
  }]
}
