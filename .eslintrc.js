module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 6,
        project: 'tsconfig.json',
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint/eslint-plugin',
    ],
    extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/@typescript-eslint',
    ],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    rules: {
        'semi': 'off',
        '@typescript-eslint/semi': 'error',
        'comma-dangle': ['error', 'always-multiline'],
        'no-console': 'error',
        'quotes': ['error', 'single', { 'avoidEscape': true }],
        'object-curly-spacing': ['error', 'always'],
        'indent': ['error', 4, { 'SwitchCase': 1 }],
        'eol-last': 'error',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-member-accessibility': ['error', { overrides: { constructors: 'off' } }],
    },
    overrides: [
        {
            'files': ['test/**/*.ts'],
            'rules': {
                'class-methods-use-this': 'off'
            }
        }
    ]
};
