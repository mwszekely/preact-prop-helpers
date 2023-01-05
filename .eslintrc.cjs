module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint'
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    rules: {
        "@typescript-eslint/ban-types": 0,
        "@typescript-eslint/no-empty-interface": [
            "warn",
            {
                "allowSingleExtends": true
            }
        ],
        "@typescript-eslint/no-non-null-assertion": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/no-empty-function": 0,
        "no-unused-vars": 0,
        "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "(^h$)|(^_.*)", "varsIgnorePattern": "(^h$)|(^_.*)" }]
    }
}