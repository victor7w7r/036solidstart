/** @type {import("eslint").Linter.Config} */
// eslint-disable-next-line import/no-commonjs, toplevel/no-toplevel-side-effect
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:functional/stylistic',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:perfectionist/recommended-natural',
    'plugin:promise/recommended',
    'plugin:security/recommended-legacy',
    'plugin:solid/typescript',
    'plugin:sonarjs/recommended-legacy',
    'plugin:tailwindcss/recommended',
    'plugin:unicorn/recommended',
    'plugin:vitest/legacy-recommended'
  ],
  'overrides': [
    {
      'files': ['test/**/*.spec.ts', 'test/**/*.spec.tsx', '**/*.d.ts'],
      'rules': {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
        '@typescript-eslint/init-declarations': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-extraneous-class': 'off',
        '@typescript-eslint/no-magic-numbers': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/unbound-method': 'off',
        'functional/no-classes': 'off',
        'no-magic-numbers': 'off',
        'security/detect-object-injection': 'off',
        'sonarjs/no-duplicate-string': 'off',
        'toplevel/no-toplevel-side-effect': 'off',
        'unicorn/consistent-function-scoping': 'off',
        'unicorn/no-abusive-eslint-disable': 'off',
        'unicorn/no-useless-undefined': 'off',
        'vitest/consistent-test-it': 'warn',
        'vitest/no-alias-methods': 'warn',
        'vitest/no-conditional-expect': 'warn',
        'vitest/no-conditional-tests': 'warn',
        'vitest/no-duplicate-hooks': 'warn',
        'vitest/no-focused-tests': 'warn',
        'vitest/no-standalone-expect': 'warn',
        'vitest/no-test-return-statement': 'warn',
        'vitest/prefer-comparison-matcher': 'warn',
        'vitest/prefer-each': 'warn',
        'vitest/prefer-equality-matcher': 'warn',
        'vitest/prefer-expect-assertions': 'warn',
        'vitest/prefer-expect-resolves': 'warn',
        'vitest/prefer-hooks-in-order': 'warn',
        'vitest/prefer-hooks-on-top': 'warn',
        'vitest/prefer-lowercase-title': 'warn',
        'vitest/prefer-mock-promise-shorthand': 'warn',
        'vitest/prefer-spy-on': 'warn',
        'vitest/prefer-strict-equal': 'warn',
        'vitest/prefer-to-be': 'warn',
        'vitest/prefer-to-be-object': 'warn',
        'vitest/prefer-to-be-truthy': 'warn',
        'vitest/prefer-to-contain': 'warn',
        'vitest/prefer-to-have-length': 'warn',
        'vitest/prefer-todo': 'warn',
        'vitest/require-hook': 'warn',
        'vitest/require-top-level-describe': 'warn'
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { 'jsx': true },
    ecmaVersion: 'latest',
    project: './tsconfig.eslint.json',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    '@tanstack/query',
    'functional',
    'import',
    'perfectionist',
    'prettier',
    'promise',
    'security',
    'solid',
    'sonarjs',
    'simple-import-sort',
    'tailwindcss',
    'toplevel',
    'unicorn'
  ],
  root: true,
  rules: {
    '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
    '@typescript-eslint/consistent-type-exports': 'warn',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/default-param-last': 'error',
    '@typescript-eslint/init-declarations': 'warn',
    '@typescript-eslint/no-confusing-void-expression': [
      'error',
      { 'ignoreArrowShorthand': true }
    ],
    '@typescript-eslint/no-import-type-side-effects': 'warn',
    '@typescript-eslint/no-inferrable-types': 'warn',
    '@typescript-eslint/no-misused-promises': [
      'error',
      { 'checksVoidReturn': false }
    ],
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'warn',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      { 'allowTernary': true }
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        'args': 'all',
        'argsIgnorePattern': '^_',
        'caughtErrors': 'all',
        'caughtErrorsIgnorePattern': '^_',
        'destructuredArrayIgnorePattern': '^_',
        'varsIgnorePattern': '^_'
      }
    ],
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-useless-empty-export': 'error',
    '@typescript-eslint/prefer-destructuring': 'warn',
    '@typescript-eslint/prefer-readonly-parameter-types': [
      'off',
      {
        'ignoreInferredTypes': true,
        'treatMethodsAsReadonly': true
      }
    ],
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/sort-type-constituents': 'warn',
    '@typescript-eslint/strict-boolean-expressions': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    'arrow-body-style': ['warn', 'as-needed'],
    'camelcase': 'warn',
    'eqeqeq': ['warn', 'always', { 'null': 'ignore' }],
    'func-style': ['warn'],
    'functional/no-classes': 'error',
    'functional/no-throw-statements': 'error',
    'functional/no-try-statements': 'error',
    'functional/prefer-immutable-types': 'off',
    'functional/prefer-tacit': 'off',
    'import/exports-last': 'error',
    'import/no-absolute-path': 'error',
    'import/no-amd': 'error',
    'import/no-commonjs': 'error',
    'import/no-empty-named-blocks': 'error',
    'import/no-import-module-exports': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-namespace': 'error',
    'import/no-nodejs-modules': 'error',
    'import/no-self-import': 'error',
    'import/no-unresolved': 'off',
    'import/no-unused-modules': 'warn',
    'import/no-useless-path-segments': 'error',
    'import/order': 'off',
    'max-statements-per-line': ['warn', { 'max': 1 }],
    'no-console': 'warn',
    'no-constructor-return': 'error',
    'no-duplicate-imports': 'error',
    'no-loop-func': 'error',
    'no-new-func': 'error',
    'no-param-reassign': 'error',
    'no-return-await': 'warn',
    'no-script-url': 'error',
    'no-self-compare': 'warn',
    'no-template-curly-in-string': 'warn',
    'no-throw-literal': 'error',
    'no-unneeded-ternary': 'warn',
    'no-unreachable-loop': 'error',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-useless-concat': 'warn',
    'no-useless-constructor': 'warn',
    'no-useless-rename': 'warn',
    'no-useless-return': 'warn',
    'no-var': 'error',
    'object-shorthand': ['error', 'always'],
    'operator-assignment': ['warn', 'always'],
    'perfectionist/sort-exports': 'off',
    'perfectionist/sort-imports': 'off',
    'perfectionist/sort-named-imports': 'off',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'warn',
    'prefer-spread': 'warn',
    'prefer-template': 'warn',
    'prettier/prettier': 'warn',
    'promise/always-return': 'off',
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': 'warn',
    'solid/jsx-no-undef': 'off',
    'solid/prefer-show': 'warn',
    'solid/reactivity': 'off',
    'toplevel/no-toplevel-let': 'warn',
    'toplevel/no-toplevel-side-effect': 'warn',
    'toplevel/no-toplevel-var': 'error',
    'unicorn/consistent-destructuring': 'error',
    'unicorn/no-anonymous-default-export': 'off',
    'unicorn/no-await-expression-member': 'off',
    'unicorn/no-keyword-prefix': 'error',
    'unicorn/no-unused-properties': 'warn',
    'unicorn/numeric-separators-style': 'off',
    'unicorn/prevent-abbreviations': 'off'
  },
  'settings': {
    'import/resolver': {
      'node': {
        'extensions': ['.ts', '.tsx']
      },
      'typescript': true
    }
  }
}
