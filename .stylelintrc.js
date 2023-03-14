/** @type { import('stylelint').Config } */
const config = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-recess-order',
    // 'stylelint-config-recommended-scss',
    // 'stylelint-config-css-modules'
  ],
  rules: {},
  overrides: [
    {
      files: ['**/*.js', '**/*.cjs', '**/*.mjs', '**/*.jsx', '**/*.ts', '**/*.tsx'],
      customSyntax: 'postcss-styled-syntax',
    },
  ],
};

module.exports = config;
