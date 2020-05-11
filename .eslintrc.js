const INLINE_ELEMENTS = ['a', 'abbr', 'audio', 'b', 'bdi', 'bdo', 'canvas', 'cite', 'code', 'data', 'del', 'dfn', 'em', 'i', 'iframe', 'ins', 'kbd', 'label', 'map', 'mark', 'noscript', 'object', 'output', 'picture', 'q', 'ruby', 's', 'samp', 'small', 'span', 'strong', 'sub', 'sup', 'svg', 'time', 'u', 'var', 'video']

module.exports = {
  parser: 'vue-eslint-parser',
  plugins: ['vue', 'html', '@typescript-eslint'],
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:gridsome/recommended',
    'standard'
  ],
  rules: {
    'vue/component-tags-order': ['warn', { order: ['template', 'script', 'style'] }],
    'vue/max-attributes-per-line': 'off',
    'vue/html-closing-bracket-newline': ['warn', { singleline: 'never', multiline: 'never' }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'vue/singleline-html-element-content-newline': ['error', {
      ignoreWhenNoAttributes: true,
      ignoreWhenEmpty: true,
      ignores: [...INLINE_ELEMENTS, 'g-link', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']
    }]
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true
    }
  }
}
