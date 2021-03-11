let _pluginName = '@babel/eslint-plugin';
let _pluginVsn = require('../package.json').peerDependencies[_pluginName];

let _pluginActualVsn = require(`${_pluginName}/package.json`).version;
let _semver = require('semver');

// eslint-disable-next-line lodash/prefer-lodash-method
if (!_semver.satisfies(_pluginActualVsn.replace(/.*#semver:/, ''), _pluginVsn.replace(/.*#semver:/, ''))) {
  throw new Error(`Expected ${_pluginName}@${_pluginVsn} but found version ${_pluginActualVsn} installed.`);
}

let _ = require('lodash');
let _basic = require('./basic');

// see https://github.com/eslint/eslint/issues/12592
_basic = _.cloneDeep(_basic);

module.exports = {
  parser: '@babel/eslint-parser',

  parserOptions: {
    requireConfigFile: false,
    sourceType: 'module'
  },

  plugins: [
    '@babel'
  ],

  rules: {
    'new-cap': 'off',
    '@babel/new-cap': _basic.rules['new-cap'],

    'no-invalid-this': 'off',
    '@babel/no-invalid-this': _basic.rules['no-invalid-this'],

    'no-unused-expressions': 'off',
    '@babel/no-unused-expressions': _basic.rules['no-unused-expressions'],

    'object-curly-spacing': 'off',
    '@babel/object-curly-spacing': _basic.rules['object-curly-spacing'],

    semi: 'off',
    '@babel/semi': _basic.rules.semi
  }
};
