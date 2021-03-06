module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "semi": 0,
        "comma-dangle": 0,
        "max-len": [1, 300, 4],
        "arrow-parens": 0,
        "generator-star-spacing": 0,
        "class-methods-use-this": 0,
        "space-unary-ops": 0,
        "global-require": 0,
        "arrow-body-style": 0,
        "camelcase": 0,
        "new-cap": 0,

        "import/default": 0,
        "import/no-duplicates": 0,
        "import/named": 0,
        "import/namespace": 0,
        "import/no-unresolved": 0,
        "import/no-dynamic-require": 0,
        "import/no-named-as-default": 2,
        "import/no-extraneous-dependencies": 0,
        "import/prefer-default-export": 0,
        "import/extensions": 0,
        "import/newline-after-import": 0,

        "no-console": 0,
        "no-alert": 0,
        "no-multiple-empty-lines": [1, { max: 2}],
        "no-param-reassign": 0,
        "no-trailing-spaces": [2, {
            "skipBlankLines": true
        }],
        "no-underscore-dangle": 0,
        "no-duplicate-imports": 0,
        "no-plusplus": 0,
        "no-confusing-arrow": 0,
        "no-use-before-define": 0,

        "react/jsx-space-before-closing": 0,
        "react/jsx-filename-extension": 0,
        "react/jsx-wrap-multilines": 0,
        "react/no-danger": 0,
        "react/no-array-index-key": 0,
        "react/prop-types": 0,
        "react/prefer-stateless-function": 0,
        "jsx-a11y/no-noninteractive-element-interactions" : 0,
        "react/react-in-jsx-scope": 0,

        "jsx-a11y/no-static-element-interactions": 0
    }
}
