module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module",
        "jsxPragma": null
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        'react/react-in-jsx-scope': 0,
        'react/jsx-uses-react': 0,
        '@typescript-eslint/ban-ts-comment': 0,
    }
};
