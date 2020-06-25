module.exports = {
  extends: [
    'plugin:verydanny/typescript',
    'plugin:verydanny/typescript-tsconfig-checking',
    'plugin:verydanny/react',
    // 'plugin:@rentpath/eslint-plugin-rentpath/typescript-tsconfig-checking',
    // 'plugin:@rentpath/eslint-plugin-rentpath/react',
    'plugin:verydanny/node',
    'plugin:verydanny/jest',
    'plugin:verydanny/prettier',
    // 'plugin:@rentpath/eslint-plugin-rentpath/jest',
    // 'plugin:@rentpath/eslint-plugin-rentpath/prettier'
  ],
  parserOptions: {
    project: 'tsconfig.json',
  },
  rules: {
    // ES6
    'callback-return': 'off',
    'func-style': 'off',
    'require-atomic-updates': 'off',

    // Jest
    'jest/valid-expect-in-promise': 'off',
    'jest/require-tothrow-message': 'off',

    // File resolution
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'error',

    // JSX Ally
    'jsx-a11y/control-has-associated-label': 'off',

    // React
    'react/display-name': 'off',

    // Node
    'node/no-extraneous-require': 'off',

    // TypeScript
    '@typescript-eslint/no-unnecessary-type-arguments': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/prefer-readonly': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/await-thenable': 'off',

    // Prettier (IMPORTANT: Must be last)
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        bracketSpacing: true,
        trailingComma: 'all',
        singleQuote: true,
        semi: false,
      },
    ],
  },
  // parserOptions: {
  //   project: [
  //     'packages/tsconfig.json',
  //     'packages/tsconfig_core.json',
  //   ],
  // },
  // rules: {
  //   // ES6
  //   'callback-return': 'off',
  //   'func-style': 'off',
  //   'require-atomic-updates': 'off',

  //   // Jest
  //   'jest/valid-expect-in-promise': 'off',
  //   'jest/require-tothrow-message': 'off',

  //   // File resolution
  //   'import/extensions': 'off',
  //   'import/no-extraneous-dependencies': 'error',

  //   // JSX Ally
  //   'jsx-a11y/control-has-associated-label': 'off',

  //   // React
  //   'react/display-name': 'off',

  //   // Node
  //   'node/no-extraneous-require': 'off',

  //   // TypeScript
  //   '@typescript-eslint/no-unnecessary-type-arguments': 'off',
  //   '@typescript-eslint/no-unnecessary-condition': 'off',
  //   '@typescript-eslint/prefer-readonly': 'off',
  //   '@typescript-eslint/ban-types': 'off',
  //   '@typescript-eslint/unbound-method': 'off',
  //   '@typescript-eslint/no-misused-promises': 'off',
  //   '@typescript-eslint/await-thenable': 'off',
  //   '@typescript-eslint/no-misused-promises': 'off',

  //   // Prettier (IMPORTANT: Must be last)
  //   'prettier/prettier': ['error', {
  //     arrowParens: 'always',
  //     bracketSpacing: true,
  //     trailingComma: 'all',
  //     singleQuote: true,
  //     semi: false
  //   }]
  // },
  // overrides: [
  //   {
  //     files: [
  //       '**/test/**/*.ts',
  //       '**/test/**/*.tsx',
  //       '**/tests/**/*.ts',
  //       '**/tests/**/*.tsx',
  //     ],
  //     rules: {
  //       // Tests don't have to worry about extra deps for bundle size. It's okay to import
  //       // whatever in tests.
  //       'import/no-extraneous-dependencies': 'off',
  //     },
  //   },
  // ],
}
