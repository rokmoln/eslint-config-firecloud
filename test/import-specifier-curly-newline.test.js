
const rule = require("../rules/import-specifier-curly-newline"),
RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015, sourceType: 'module' } });
const errorMessageOpening = 'Expected a line break after the opening brace.';
const errorMessageClosing = 'Expected a line break before the closing brace.';

ruleTester.run("import-specifier-curly-newline", rule, {
  valid: [
    {
      code: 'import {\na\n} from "b"',
      options: [{allowOneLineIfSingle: false}]
    },
    {
      code: 'import {\na,b\n} from "b"',
      options: [{allowOneLineIfSingle: false}]
    },
    {
      code: 'import {\na,\nb\n} from "b"',
      options: [{allowOneLineIfSingle: false}]
    },
    {
      code: 'import {a} from "b"',
      options: [{allowOneLineIfSingle: true}]
    },
  ],
  invalid: [
    {
      code: 'import {a} from "b"',
      options: [{allowOneLineIfSingle: false}],
      errors: [
        { message: errorMessageOpening },
        { message: errorMessageClosing }
      ]
    },
    {
      code: 'import {a, b\n} from "b"',
      options: [{allowOneLineIfSingle: false}],
      errors: [
        { message: errorMessageOpening }
      ]
    },
    {
      code: 'import {\na, b} from "b"',
      options: [{allowOneLineIfSingle: false}],
      errors: [
        { message: errorMessageClosing }
      ]
    },

    {
      code: 'import {a, b\n} from "b"',
      options: [{allowOneLineIfSingle: true}],
      errors: [
        { message: errorMessageOpening }
      ]
    },
    {
      code: 'import {\na, b} from "b"',
      options: [{allowOneLineIfSingle: true}],
      errors: [
        { message: errorMessageClosing }
      ]
    },
    {
      code: 'import {a, b} from "b"',
      options: [{allowOneLineIfSingle: true}],
      errors: [
        { message: errorMessageOpening },
        { message: errorMessageClosing }
      ]
    },
    {
      code: 'import \n{a, b}\n from "b"',
      options: [{allowOneLineIfSingle: true}],
      errors: [
        { message: errorMessageOpening },
        { message: errorMessageClosing }
      ]
    }
  ]
});
