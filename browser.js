module.exports = {
  extends: [
    './configs/basic.js',
    './configs/babel.js',
    './configs/async-await.js',
    './configs/dependencies.js',
    './configs/import.js',
    './configs/lodash.js',
    './configs/no-null.js',
    './configs/max-len-2.js',
    './configs/browser.js',
    './no-ide.js' // REMOVE after https://github.com/eslint/eslint/issues/7549
  ]
};