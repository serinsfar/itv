export default [
  { ignores: ['dist', 'build', 'node_modules'] },

  // ✅ Node/CommonJS configs & scripts
  {
    files: [
      '**/*.config.{js,cjs,mjs}',
      'vite.config.{js,mjs,ts}',
      'tailwind.config.{js,cjs,mjs,ts}',
      'postcss.config.{js,cjs,mjs}',
      'scripts/**/*.{js,cjs,mjs}',
      // add more patterns if you have them
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      // If some of these use module.exports/require, keep CommonJS:
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
      },
    },
    rules: {
      // optional: Node-specific tweaks
    },
  },

  // 🔧 If you also have ESM Node config files that use `export default`, add this too:
  {
    files: [
      'eslint.config.{js,mjs}',
      'vite.config.{js,mjs,ts}',
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
  },

  // 🌐 Your existing browser React rules
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } }, // or 'detect'
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
];
