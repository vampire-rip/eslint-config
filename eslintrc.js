/** @type {import('eslint').Linter.RulesRecord} */
const tsRules = {
  '@typescript-eslint/object-curly-spacing': ['error', 'always'],
  '@typescript-eslint/ban-types': 'off',
  '@typescript-eslint/indent': 'off',
  '@typescript-eslint/no-unsafe-assignment': 'off',
  '@typescript-eslint/parameter-properties': ['error', {}],
  '@typescript-eslint/quotes': 'off',
};

/** @type {import('eslint').Linter.RulesRecord} */
const rules = {
  'react/react-in-jsx-scope': 'off',
  'jsx-quotes': ['error', 'prefer-double'],
  'arrow-parens': ['error', 'always'],
  'object-curly-spacing': ['error', 'always'],
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'warn',
  'react/no-unknown-property': 'off',
  'func-names': ['error', 'always'],
  eqeqeq: ['error', 'smart'],
  'no-eq-null': 'off',
  'capitalized-comments': 'off',
  'import/named': 'off',
};

/** @type {import('eslint').Linter.BaseConfig} */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ['react', 'react-hooks', 'import'],
  extends: ['xo-space', 'plugin:react/recommended', 'plugin:import/recommended', 'plugin:prettier/recommended'],
  overrides: [
    {
      files: ['*.js', 'scripts/*.js'],
      env: {
        commonjs: true,
        node: true,
      },
    },
    {
      files: ['**/*.{ts,tsx,mts,mtsx}'],
      extends: ['xo-typescript/space'],
      rules: {
        ...rules,
        ...tsRules,
      },
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    {
      files: ['*.test.*', '*.spec.*', '**/__test__/**'],
      env: {
        mocha: true,
        jest: true,
      },
    },
    {
      files: ['**/*.config.*'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        '@typescript-eslint/triple-slash-reference': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules,
};
