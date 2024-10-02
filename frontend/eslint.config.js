import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import ts from '@typescript-eslint/parser';
import react from 'eslint-plugin-react'; // Import the React plugin

const config = {
    ignores: ['dist'],
    languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
        parser: ts,
    },
    overrides: [
        {
            files: ['**/*.{ts,tsx}'], // Match TypeScript files
            rules: {
                'react/react-in-jsx-scope': 'off',
                'react/prop-types': 'off',
            },
        },
        {
            files: ['**/*.test.{ts,tsx}'], // Match test files specifically
            rules: {
              ...reactHooks.configs.recommended.rules,
              ...react.configs.recommended.rules, // Spread React plugin recommended rules
              'react/prop-types': 'off', // Disable if using TypeScript for type checking
              'react/no-unescaped-entities': 'warn', // Prevents issues with unescaped characters
              'react/jsx-uses-react': 'off', // Redundant with React 17 and later
              'react/react-in-jsx-scope': 'off',
            },
        },
    ],
    plugins: {
        'react-hooks': reactHooks,
        'react-refresh': reactRefresh,
    },
    rules: {
        'no-unused-vars': 'warn',
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        'react/jsx-uses-vars': 'error',
    },
};

export default config;
