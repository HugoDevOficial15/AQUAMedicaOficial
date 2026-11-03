// module.exports = {
//   env: {
//     es6: true,
//     node: true,
//   },
//   parserOptions: {
//     "ecmaVersion": 2018,
//   },
//   extends: [
//     "eslint:recommended",
//     "google",
//   ],
//   rules: {
//     "no-restricted-globals": ["error", "name", "length"],
//     "prefer-arrow-callback": "error",
//     "quotes": ["error", "double", {"allowTemplateLiterals": true}],
//   },
//   overrides: [
//     {
//       files: ["**/*.spec.*"],
//       env: {
//         mocha: true,
//       },
//       rules: {},
//     },
//   ],
//   globals: {},
// };


module.exports = {
    root: true,
    env: {
        es2021: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "google",
    ],
    parserOptions: {
        ecmaVersion: 2021,
    },
    rules: {
        "quotes": ["error", "double"],
        "indent": ["error", 4],
        "object-curly-spacing": ["error", "always"],
        "require-jsdoc": "off",
        "valid-jsdoc": "off",
    },
};
