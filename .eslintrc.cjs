module.exports = {
  root: true,
  env: {
    node: true,
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:vue/vue3-recommended'
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module"
  },
  plugins: ['unused-imports', '@typescript-eslint'],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    camelcase: 'off',
    'no-use-before-define': ['error', { variables: true, functions: false, classes: true }],
    'id-length': [2, { exceptions: ['i', 'j'], properties: 'never' }],
    'max-classes-per-file': ['error', 1],
    'max-len': ['warn', { code: 100 }],
    'no-global-assign': ['error', { exceptions: ['Object'] }],
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    'import/prefer-default-export': 'off',
    'guard-for-in': 'error',
    'object-curly-spacing': ['error', 'always'],
    'comma-dangle': ['warn', 'always-multiline'],
    semi: 'warn',
    'arrow-body-style': 'off',
    quotes: ["error", "single"],
    'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 1 }],
    'lines-between-class-members': 'off',
    yoda: 'error',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    "@typescript-eslint/no-use-before-define": "off",
    // 'no-shadow': 'off',
    // '@typescript-eslint/no-shadow': ['error'],
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
