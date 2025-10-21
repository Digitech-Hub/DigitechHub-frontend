import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-plugin-prettier";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import globals from "globals";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
    globalIgnores(["dist", "node_modules", "build"]),
    {
        files: ["**/*.{ts,tsx}"],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs["recommended-latest"],
            reactRefresh.configs.vite,
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parser: tseslint.parser,
            parserOptions: {
                project: "./tsconfig.app.json",
                sourceType: "module",
                ecmaFeatures: { jsx: true },
            },
        },
        plugins: {
            import: importPlugin,
            prettier,
            react,
        },
        settings: {
            "import/resolver": {
                typescript: {
                    project: "./tsconfig.json",
                },
            },
            react: {
                version: "detect",
            },
        },
        rules: {
            "no-console": "warn",
            quotes: [
                "off",
                "single",
                {
                    avoidEscape: true,
                    allowTemplateLiterals: true,
                },
            ],
            "react/no-unknown-property": "off",
            "prettier/prettier": "off",
            "import/order": [
                "warn",
                {
                    groups: [
                        "builtin",
                        "external",
                        "internal",
                        ["parent", "sibling", "index"],
                        "type",
                    ],
                    alphabetize: {
                        order: "asc",
                        caseInsensitive: true,
                    },
                    "newlines-between": "always",
                },
            ],
            "@typescript-eslint/no-unused-vars": "warn",
            "@typescript-eslint/no-explicit-any": [
                "warn",
                {
                    ignoreRestArgs: true,
                },
            ],
            "@typescript-eslint/consistent-type-imports": "error",
        },
    },
]);
