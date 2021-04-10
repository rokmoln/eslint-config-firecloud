let _pluginName = 'eslint-plugin-import';
let _semver = require('semver');

let _pluginVsn = require('../package.json').peerDependencies[_pluginName];
let _pluginActualVsn = require('./util').eslintRequire(`${_pluginName}/package.json`).version;

// eslint-disable-next-line lodash/prefer-lodash-method
if (!_semver.satisfies(_pluginActualVsn.replace(/.*#semver:/, ''), _pluginVsn.replace(/.*#semver:/, ''))) {
  throw new Error(`Expected ${_pluginName}@${_pluginVsn} but found version ${_pluginActualVsn} installed.`);
}

module.exports = {
  plugins: [
    'import'
  ],

  settings: {
    'import/ignore': [
      '\\.json$',
      'node_modules'
    ],

    'import/resolver': {
      node: {
        extensions: [
          // default + react
          '.js',
          '.json',
          '.jsx',
          '.mjs',
          // typescript + react
          '.ts',
          '.tsx',
          '.d.ts'
        ]
      }
    }
  },

  rules: {
    'import/dynamic-import-chunkname': 'off',
    'import/export': 'error',
    'import/exports-last': 'off',
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      ts: 'never'
    }],
    'import/first': 'error',
    'import/group-exports': 'off',
    'import/max-dependencies': 'off',
    'import/named': 'error',
    'import/namespace': ['error', {
      allowComputed: true
    }],
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-amd': 'error',
    'import/no-anonymous-default-export': 'off',
    'import/no-commonjs': 'off',
    'import/no-cycle': 'error',
    'import/no-default-export': 'off',
    'import/no-deprecated': 'error',
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-internal-modules': 'off',
    'import/no-mutable-exports': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-export': 'off',
    'import/no-namespace': 'off',
    'import/no-nodejs-modules': 'off',
    'import/no-relative-parent-imports': 'off',
    'import/no-restricted-paths': 'off',
    'import/no-self-import': 'error',
    'import/no-unassigned-import': 'error',
    'import/no-unresolved': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-unused-modules': 'off',
    'import/no-useless-path-segments': 'error',
    'import/order': 'off',
    'import/prefer-default-export': 'warn',
    'import/unambiguous': 'off'
  }
};
