// Configuration for StyleLint
// See: https://stylelint.io/user-guide/configuration/

module.exports = {
  extends: ['@wemake-services/stylelint-config-scss', 'stylelint-config-css-modules', 'stylelint-a11y/recommended'],
  plugins: ['stylelint-no-unsupported-browser-features', 'stylelint-a11y'],

  rules: {
    'max-line-length': null,
    'value-list-comma-newline-after': null,
    'color-format/format': null,
    'declaration-colon-newline-after': null,
    'scale-unlimited/declaration-strict-value': null,
    'plugin/no-low-performance-animation-properties': null,
    'a11y/media-prefers-reduced-motion': null,
    'property-no-vendor-prefix': null,
    indentation: null,
    'function-url-quotes': null,
    'a11y/selector-pseudo-class-focus': null,
    'length-zero-no-unit': null,
    'plugin/stylelint-no-indistinguishable-colors': null,
    'csstools/use-nesting': null,
    // ignore special `var-` css variables for `:export`
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['/^var-/'],
      },
    ],

    // custom plugins to work with
    'plugin/no-unsupported-browser-features': [
      true,
      {
        severity: 'warning',
        ignore: ['flexbox', 'viewport-units'],
      },
    ],

    // a11y
    'a11y/content-property-no-static-value': true,
  },
}
