// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  typescript: {
    tsconfigPath: 'tsconfig.json',
    overrides: {
      'ts/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }]
    },
    overridesTypeAware: {
      'ts/no-unsafe-return': 'warn',
      'ts/no-unsafe-assignment': 'warn',
      'ts/no-unsafe-argument': 'warn'
    }
  },
  rules: {
    'style/comma-dangle': 'off',
    'comma-dangle': ['error', 'never'],
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'unused-imports/no-unused-vars': 'off',
    'vue/html-indent': ['error', 2, {
      alignAttributesVertically: false
    }],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'always'
    }],
    'vue/block-order': ['error', {
      order: [['template', 'script'], 'style']
    }]
  },
  ignores: [
    '**/node_modules/**',
    '**/dist/**',
    '**/build/**',
    '**/coverage/**',
    '**/lib/**',
    '**/public/**',
    '**/types/**',
    'vite.config.ts'
  ]
})
