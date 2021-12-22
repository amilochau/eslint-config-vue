# @amilochau/eslint-config-vue

## Introduction

`@amilochau/eslint-config-vue` exposes a set of ESLint rules for vue.js projects. This is an opinionated configuration.

---

## Integration

To integrate the `@amilochau/eslint-config-vue` package, you must follow these three steps.

1. Install the npm package

Run the following command to install the npm package:

```pwsh
npm install --save-dev @amilochau/eslint-config-vue
```

1. Register the plugin

In your ESLint configuration, extends the `@amilochau/vue` configuration file:

**package.json**

**package.json**

```json
{
  "name": "XXX",
  "version": "1.0.0",
  "eslintConfig": {
    "extends": [
      "@amilochau/eslint-config-vue"
    ]
  }
}
```

## Result

The configured ESLint rules are now applied to your code. You should run the `eslint` command to see results.

--- 

## Contribute

Feel free to push your code if you agree with publishing under the [MIT license](./LICENSE).
